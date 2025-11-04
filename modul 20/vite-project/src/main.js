// coments
let inpuitContent = document.querySelector('.commentInput');
let btnToPost = document.querySelector('.btnSubmit');
let commentsList = document.querySelector('.commentsList');
let commentLi = document.querySelector('.commentLi');
let inputValue = inpuitContent.value;

// posts
let titleInput = document.getElementById('titleInput');
let contentInput = document.getElementById('contentInput');
let postsBtn = document.querySelector('.postsBtn');
let postsContainer = document.getElementById('postsContainer');
let postId = 2;

// ===== Отримання постів =====
async function getPosts() {
  try {
    let fetApi = fetch('http://localhost:3000/posts');
    let response = await fetApi;
    let data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
getPosts();

// ===== Створення нового поста =====
async function createPost() {
  try {
    let postsTitle = titleInput.value.trim();
    let postsContent = contentInput.value.trim();

    if (!postsTitle || !postsContent) {
      return alert('Введи заголовок і зміст!');
    }

    const toPostS = { title: postsTitle, content: postsContent };

    let postToAdd = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(toPostS),
    };

    let response = await fetch('http://localhost:3000/posts', postToAdd);
    let data = await response.json();
    console.log('Створено пост:', data);

    createPostsElement(data);
    titleInput.value = '';
    contentInput.value = '';
  } catch (error) {
    console.error(error);
  }
}

// ===== Створення HTML елемента поста =====
function createPostsElement(post) {
  let postWrapper = document.createElement('ul');
  postWrapper.classList.add('postWrapper');
  postWrapper.dataset.id = post.id;

  let createdLiForTitle = document.createElement('li');
  createdLiForTitle.classList.add('createLiForPTitle');

  let createLiForContent = document.createElement('li');
  createLiForContent.classList.add('createLiForPContent');

  let pTitle = document.createElement('p');
  let pContent = document.createElement('p');
  pTitle.textContent = post.title;
  pContent.textContent = post.content;

  createdLiForTitle.appendChild(pTitle);
  createLiForContent.appendChild(pContent);

  let deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Видалити';
  deleteBtn.classList.add('deletePostButton');

  // ✅ кнопка "Редагувати"
  let editBtn = document.createElement('button');
  editBtn.textContent = 'Редагувати';
  editBtn.classList.add('editPostButton');

  // подія відкриття модалки
  editBtn.addEventListener('click', () => {
    modalPost.style.display = 'block';
    currentEditPostId = postWrapper.dataset.id;
    inputEditTitle.value = pTitle.textContent;
    inputEditContent.value = pContent.textContent;
  });

  postWrapper.appendChild(createdLiForTitle);
  postWrapper.appendChild(createLiForContent);
  postWrapper.appendChild(editBtn);
  postWrapper.appendChild(deleteBtn);
  postsContainer.appendChild(postWrapper);

  // видалення поста
  deleteBtn.addEventListener('click', async () => {
    let postIdToDelete = postWrapper.dataset.id;
    try {
      const response = await fetch(
        `http://localhost:3000/posts/${postIdToDelete}`,
        { method: 'DELETE' }
      );

      if (response.ok) {
        postWrapper.remove();
        console.log(`Пост з id ${postIdToDelete} видалено ✅`);
      } else {
        console.error('Помилка при видаленні поста:', response.status);
      }
    } catch (error) {
      console.error('Помилка при видаленні:', error);
    }
  });
}

// ===== Обробник події для створення поста =====
postsBtn.addEventListener('click', (e) => {
  e.preventDefault();
  createPost();
});

// ===== РЕДАГУВАННЯ ПОСТІВ =====
let currentEditPostId = null;
const modalPost = document.getElementById('myModalPost');
const inputEditTitle = document.getElementById('editPostTitle');
const inputEditContent = document.getElementById('editPostContent');
const saveEditPostBtn = document.getElementById('saveEditPost');
const closePostModalBtn = document.getElementById('closePostModal');

function editPost() {
  let newTitle = inputEditTitle.value.trim();
  let newContent = inputEditContent.value.trim();

  if (!newTitle || !newContent) return alert('Введи новий заголовок і зміст!');

  let toEdit = { title: newTitle, content: newContent };

  fetch(`http://localhost:3000/posts/${currentEditPostId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(toEdit),
  })
    .then((response) => {
      if (!response.ok) throw new Error('Помилка при оновленні поста');
      return response.json();
    })
    .then((data) => {
      const postWrapper = document.querySelector(
        `.postWrapper[data-id='${currentEditPostId}']`
      );
      if (postWrapper) {
        const titleP = postWrapper.querySelector('.createLiForPTitle p');
        const contentP = postWrapper.querySelector('.createLiForPContent p');
        titleP.textContent = data.title;
        contentP.textContent = data.content;
      }
      modalPost.style.display = 'none';
      inputEditTitle.value = '';
      inputEditContent.value = '';
    })
    .catch((error) => console.error(error));
}

saveEditPostBtn.addEventListener('click', (e) => {
  e.preventDefault();
  editPost();
});

closePostModalBtn.addEventListener('click', () => {
  modalPost.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modalPost) modalPost.style.display = 'none';
});

// ===== Коментарі =====
let commentId = 2;

async function getComents() {
  try {
    let fetApi = fetch('http://localhost:3000/coments');
    let response = await fetApi;
    let data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function createComment(postId) {
  try {
    let content = inpuitContent.value.trim();
    if (!content) return alert('Введи коментар!');

    const toPost = { content: content, postId: postId };

    let postToAdd = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(toPost),
    };

    let response = await fetch('http://localhost:3000/coments', postToAdd);
    let data = await response.json();

    let commentItem = document.createElement('li');
    commentItem.classList.add('comment-item');
    commentItem.dataset.id = data.id;

    let p = document.createElement('p');
    p.textContent = data.content;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Видалити';
    deleteBtn.classList.add('deleteCommentButton');

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Редагувати';
    editBtn.id = 'openModalBtn';
    editBtn.addEventListener('click', () => {
      modal.style.display = 'block';
      currentEditId = commentItem.dataset.id;
      inputEditComment.value = p.textContent;
    });

    deleteBtn.addEventListener('click', async () => {
      let commentIdToDelete = commentItem.dataset.id;
      try {
        const response = await fetch(
          `http://localhost:3000/coments/${commentIdToDelete}`,
          { method: 'DELETE' }
        );

        if (response.ok) {
          commentItem.remove();
          console.log(`Коментар з id ${commentIdToDelete} видалено ✅`);
        } else {
          console.error('Помилка при видаленні:', response.status);
        }
      } catch (error) {
        console.error('Помилка при видаленні:', error);
      }
    });

    commentItem.appendChild(p);
    commentItem.appendChild(editBtn);
    commentItem.appendChild(deleteBtn);
    commentsList.appendChild(commentItem);
    inpuitContent.value = '';
  } catch (error) {
    console.error(error);
  }
}

btnToPost.addEventListener('click', (e) => {
  e.preventDefault();
  createComment();
});

// ===== Modal для коментарів =====
const modal = document.getElementById('myModal');
const closeButton = document.querySelector('.close-button');
const closeModalBtn = document.getElementById('closeModalBtn');
let inputEditComment = document.getElementById('forEditingComment');
const saveEditBtn = document.getElementById('saveTheEdit');
let currentEditId = null;

function editComment() {
  let newContent = inputEditComment.value.trim();
  if (!newContent) return alert('Введи новий коментар!');

  let toEdit = { content: newContent };

  fetch(`http://localhost:3000/coments/${currentEditId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(toEdit),
  })
    .then((response) => {
      if (!response.ok) throw new Error('Помилка при оновленні');
      return response.json();
    })
    .then((data) => {
      let commentItem = document.querySelector(
        `.comment-item[data-id='${currentEditId}'] p`
      );
      if (commentItem) commentItem.textContent = data.content;

      modal.style.display = 'none';
      inputEditComment.value = '';
    })
    .catch((error) => console.error('Помилка при оновленні коментаря:', error));
}

saveEditBtn.addEventListener('click', (e) => {
  e.preventDefault();
  editComment();
  modal.style.display = 'none';
});

closeButton.onclick = () => (modal.style.display = 'none');
closeModalBtn.onclick = () => (modal.style.display = 'none');

window.onclick = (event) => {
  if (event.target == modal) modal.style.display = 'none';
};

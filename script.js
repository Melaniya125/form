

// $(function() {

//     let button = document.querySelector("button");
//     let name = document.querySelector('input[name="name"]');
//     let surname = document.querySelector('input[name="surname"]');
//     let email = document.querySelector('input[name="email"]');
//     let phone = document.querySelector('input[name="phone"]');
//     let comment = document.querySelector('textarea[name="comment"]');

//     button.addEventListener("click", function(event) {
//         event.preventDefault();

//         let errors = document.querySelectorAll(".error");
//         let errorEmptyPhone = document.querySelector(".error-empty-phone");
//         let errorEmptyMail = document.querySelector(".error-empty-mail");
//         let errorStatusNo = document.querySelector(".error-status.no");
//         let nameText = name.value;
//         let surnameText = surname.value;
//         let emailText = email.value;
//         let phoneText = phone.value;
//         let commentText = comment.value;
//         let success = true;
//         let checkEmail = /^[a-z-_\.]{3,}@[a-z\.-_]+\.[a-z]{1,}$/i;
                

//         for(let error of errors) {
//           error.style.display = "none";
//         }
//         errorEmptyPhone.style.display = "none";
//         errorEmptyMail.style.display = "none";

//         if(emailText == "") {
//           errorEmptyMail.style.display = "block";
//         }
//         if(phoneText == "") {
//           errorEmptyPhone.style.display = "block";
//         }

//         if(!checkEmail.test(emailText) && emailText != "") {
//             errors[0].style.display = "block";
//             success = false;
//         }

//         let checkPhone = /^[\d\+][\d\(\)\ -]{4,14}\d$/;

//         if(!checkPhone.test(phoneText)) {
//           errors[3].style.display = "block";
//           success = false;
//         }

//         if(success == true) {
//           let data = {};

//           let fieldArr = document.querySelectorAll(".feedback__form .form-field");
//           for(let field of fieldArr) {
//             let name = field.getAttribute('name');
//             data[name] = field.value;
//           }
          
          
//             let request = fetch('./ajax.php', {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json; charset=utf-8",
//               },
//               body: JSON.stringify(data),
//             }).then(resp => {
//               if(resp.status >= 200 && resp.status <= 299) {
//                 console.log(resp.status);
//                 return resp.json();
//               } else {
//                 let errorMess = "Произошла ошибка, попробуйте отправить форму позднее";
//                 if(resp.status == 500) {
//                   errorMess = "Произошла ошибка, Вас зовут Олег и Вы нам не нравитесь";
//                   throw new Error(errorMess);
//                 }
//               }
//             }).then(resp => {
//               let thxMess = document.querySelector('.thx-mess');
//               console.log(typeof thxMess);
//               let messText = `Спасибо ${resp.name}! Мы свяжемся с Вами в ближайшее время по email: ${resp.email}`;
//               thxMess.innerText = messText;
//               thxMess.classList.add("active");
  
//               console.log(resp);
//             }).catch(error => {
//               console.log(error);
//               let thxError = document.querySelector('.error-status');
//               thxError.innerText = error.message;
//               thxError.classList.add("active");
//             }) 
            
          
          
          
//         }
//     })
// });


// // fetch 
// // собрать все поля с формы в json +
// // из них сделать объект +
// // объект передать методом post через fetch  +
// // не должно быть php инъекций +


// // 500 ошибку возвести (не отправлять форму на имя Олег) +
// // возвести ошибку, если вместо json пришло что-то другое или вообще ничего не пришло +

// // 20.10.2023
// // в спасибку передать имя из формы +
// // скрыть лишнее уведомление +
// // в обязательных полях добавить вывод если поле пустое +

// // 23.10.2023
// // переделать на jquery


// //SQL (MySql): - теория
// //Настройка модулей(теория)
// //Git (основы)(теория)
// //Терминал (основы)(теория) - тренажеры с терминалом посмотреть , через ssh как зайти, что-то найти (nano для редактирования файлов):
// проход по директориям
// вывод содержимого директории на экран
// создание папки и файла
// запись в файла
// поиск по подстроке в файле (grep linux)
// подключение через ssh через терминал11


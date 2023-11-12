$(function() {

    $(document).on("click", "button", function(event) {
        event.preventDefault();

        let button = $(event.currentTarget);
        let parent = button.closest('.feedback__in');
        let name = parent.find('input[name="name"]');
        let surname = parent.find('input[name="surname"]');
        let email = parent.find('input[name="email"]');
        let phone = parent.find('input[name="phone"]');
        let comment = parent.find('textarea[name="comment"]');

        let errors = parent.find(".error");
        let errorEmptyPhone = parent.find(".error-empty-phone");
        let errorEmptyMail = parent.find(".error-empty-mail");
        let errorStatusNo = parent.find(".error-status.no");
        let nameText = name.val();
        let surnameText = surname.val();
        let emailText = email.val();
        let phoneText = phone.val();
        let commentText = comment.val();
        let success = true;
        let checkEmail = /^[a-z-_\.]{3,}@[a-z\.-_]+\.[a-z]{1,}$/i;
        let checkPhone = /^[\d\+][\d\(\)\ -]{4,14}\d$/;

        $.each(errors, function(key, error) {
            $(error).css('display', 'none');
        });

        errorEmptyPhone.css('display', 'none');
        errorEmptyMail.css('display', 'none');

        if(emailText == "") {
            errorEmptyMail.css('display', 'block');
            success = false;
          }

        if(phoneText == "") {
            errorEmptyPhone.css('display', 'block');
            success = false;
        }

        if(!checkEmail.test(emailText) && emailText != "") {
            $(errors[0]).css('display', 'block');
            success = false;
        }

        if(!checkPhone.test(phoneText)) {
            $(errors[3]).css('display', 'block');
            success = false;
        }

        if(success == true) {
            let data = {};
            let fieldArr = [
                name,
                surname,
                email,
                phone,
                comment,
            ];

            $(fieldArr).each(function() {
                let atrValue = $(this).val();
                let atrName = $(this).attr('name');
                data[atrName] = atrValue;
            });

            // console.log(data.name);
            // data = JSON.stringify(data);
            let thxMess = parent.find('.thx-mess');
            let messText = `Спасибо ${data.name}! Мы свяжемся с Вами в ближайшее время по email: ${data.email}`;
            let errorMess = parent.find('.thx-mess');
            let errorMessText = "Произошла ошибка, Вас зовут Олег и Вы нам не нравитесь";


            $.ajax({
                url: './ajax.php',
                method: 'post',
                dataType: 'json',
                data: JSON.stringify(data),
                success: function(data) { 
                    errorMess.empty(errorMessText);
                    thxMess.append(messText);
                    thxMess.addClass("active");
                },
                error: function (jqXHR, exception) {
                    if (jqXHR.status == 500 && data.name == 'oleg') {
                        thxMess.empty(messText);
                        errorMess.append(errorMessText);
                        errorMess.addClass("active");             
                    } else {
                        errorMess.empty(errorMessText);
                        errorMessText = "Произошла ошибка, попробуйте отправить форму позднее";
                        errorMess.append(errorMessText);
                        errorMess.addClass("active");             
                    } 
                }
            });
        }
    });
});
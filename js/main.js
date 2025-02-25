document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const email = document.getElementById('email');

    // 错误提示元素
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');
    const emailError = document.getElementById('email-error');

    // 表单验证函数
    function validateForm() {
        let isValid = true;

        // 验证用户名
        if (username.value.length < 3) {
            usernameError.textContent = '用户名至少需要3个字符';
            isValid = false;
        } else {
            usernameError.textContent = '';
        }

        // 验证密码
        if (password.value.length < 6) {
            passwordError.textContent = '密码至少需要6个字符';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

        // 验证确认密码
        if (password.value !== confirmPassword.value) {
            confirmPasswordError.textContent = '两次输入的密码不一致';
            isValid = false;
        } else {
            confirmPasswordError.textContent = '';
        }

        // 验证邮箱
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            emailError.textContent = '请输入有效的邮箱地址';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        return isValid;
    }

    // 实时验证
    username.addEventListener('input', validateForm);
    password.addEventListener('input', validateForm);
    confirmPassword.addEventListener('input', validateForm);
    email.addEventListener('input', validateForm);

    // 表单提交处理
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (validateForm()) {
            // 收集表单数据
            const formData = {
                username: username.value,
                password: password.value,
                email: email.value
            };

            // 这里可以添加发送到服务器的代码
            console.log('表单提交的数据：', formData);
            alert('注册成功！');
            form.reset();
        }
    });
}); 
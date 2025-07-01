function submitOrder() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!name || !phone) {
        alert("من فضلك أدخل اسمك ورقم هاتفك.");
        return;
    }

    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let orderList = [];

    checkboxes.forEach(cb => {
        const label = cb.closest("label");
        if (label) {
            orderList.push(label.textContent.trim());
        }
    });

    if (orderList.length === 0) {
        alert("من فضلك اختر منتج واحد على الأقل.");
        return;
    }

    // بناء الرسالة
    let message = `السلام عليكم 👋\n\n`;
    message += `الاسم: ${name}\n`;
    message += `رقم الهاتف: ${phone}\n\n`;
    message += `الطلب:\n`;
    message += `${orderList.join("\n")}`;

    // استبدال السطور الجديدة بـ %0A لتظهر بشكل صحيح في الواتساب
    const encodedMessage = encodeURIComponent(message).replace(/%0A/g, '%0A');

    // فتح الواتساب
    const whatsappURL = `https://wa.me/201098941965?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
}
document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('check').checked = false;
        });
    });
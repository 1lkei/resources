// 今日诗词
// 使用 fetch API 发送请求
fetch("https://v1.jinrishici.com/all")
// 将响应转换为 JSON 对象
.then(response => response.json())
// 处理 JSON 对象
.then(data => {
    // 获取 content, origin, author 对应的值
    const {content, origin, author} = data;
    // 获取 id 或 class 为 txt-onesayqt-poem, txt-onesayqt-where, txt-onesayqt-who 的标签
    const poem = document.getElementById("txt-onesayqt-poem") || document.getElementsByClassName("txt-onesayqt-poem")[0];
    const where = document.getElementById("txt-onesayqt-where") || document.getElementsByClassName("txt-onesayqt-where")[0];
    const who = document.getElementById("txt-onesayqt-who") || document.getElementsByClassName("txt-onesayqt-who")[0];
    // 使用模板字符串替换标签里的内容
    poem.innerHTML = `${content}`;
    where.innerHTML = `${origin}`;
    who.innerHTML = `${author}`;
})
// 处理错误
.catch(error => {
    // 打印错误信息
    onsole.error(error);
});

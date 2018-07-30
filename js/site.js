let tags = document.getElementsByClassName("markdown")
for (let i = 0; i < tags.length; i++) {
    let tag = tags[i];
    tag.innerHTML = markdown.toHTML(tag.innerHTML)
}

var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1274292847'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s13.cnzz.com/z_stat.php%3Fid%3D1274292847' type='text/javascript'%3E%3C/script%3E"));
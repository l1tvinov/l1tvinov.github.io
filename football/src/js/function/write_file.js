export default function writeFile(name, value) {
    var val = value;
    if (value === undefined) {
        val = "";
    }
    var download = document.createElement("a");
    download.href = "data:text/plain;content-disposition=attachment;filename=file," + val;
    download.download = name;
    download.innerText = "Скачать лог матча"
    download.id = "download";
    document.body.append(download);
}
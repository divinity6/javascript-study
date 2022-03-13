const { log } = window.console;
import { title } from "./../export/access_export.mjs";
{
    log('------------ 값 유지 ---------------');
    document.getElementById("one").innerHTML = "1." + title.value;
    // :: 1.초깃값

    title.value = '값 변경';
    debugger;

    // 여기서 값을 변경하면 변경된 값이 title 에 유지된다!!
}
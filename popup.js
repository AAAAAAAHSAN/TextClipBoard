function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
}

function copytext1()
{
    var copyText = document.getElementById("textarea1_id");
    copyText.select();
    copyText.setSelectionRange(0,100000000);
    document.execCommand("copy");
    //alert("Copied the text: " + copyText.value);
}
document.getElementById("copy-button-1").onclick = copytext1;
function copytext2()
{
    var copyText = document.getElementById("textarea2_id");
    copyText.select();
    copyText.setSelectionRange(0,100000000);
    document.execCommand("copy");
    //alert("Copied the text: " + copyText.value);

}
document.getElementById("copy-button-2").onclick = copytext2;

function copytext3()
{
    var copyText = document.getElementById("textarea3_id");
    copyText.select();
    copyText.setSelectionRange(0,100000000);
    document.execCommand("copy");
}
document.getElementById("copy-button-3").onclick = copytext3;

function copytext4()
{
    var copyText = document.getElementById("textarea4_id");
    copyText.select();
    copyText.setSelectionRange(0,100000000);
    document.execCommand("copy");
}
document.getElementById("copy-button-4").onclick = copytext4;

async function pastetext1()
{
    document.getElementById("textarea1_id").value=await navigator.clipboard.readText();
    alert("hey !!!");
}
document.getElementById("paste-button-1").onclick = pastetext1;

async function pastetext2()
{
    document.getElementById("textarea2_id").value=await navigator.clipboard.readText();
}
document.getElementById("paste-button-2").onclick = pastetext2;

async function pastetext3()
{
    document.getElementById("textarea3_id").value=await navigator.clipboard.readText();
}
document.getElementById("paste-button-3").onclick = pastetext3;

async function pastetext4()
{
    document.getElementById("textarea4_id").value=await navigator.clipboard.readText();
}
document.getElementById("paste-button-4").onclick = pastetext4;

function clearAll1()
{
    document.getElementById("textarea1_id").value="";
}
document.getElementById("clear-button-1").onclick = clearAll1;

function clearAll2()
{
    document.getElementById("textarea2_id").value="";
}
document.getElementById("clear-button-2").onclick = clearAll2;

function clearAll3()
{
    document.getElementById("textarea3_id").value="";
}
document.getElementById("clear-button-3").onclick = clearAll3;

function clearAll4()
{
    document.getElementById("textarea4_id").value="clear hey";
}
document.getElementById("clear-button-4").onclick = clearAll4;


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

function copytext2()
{
    var copyText = document.getElementById("textarea2_id");
    copyText.select();
    copyText.setSelectionRange(0,100000000);
    document.execCommand("copy");
}
function copytext3()
{
    var copyText = document.getElementById("textarea3_id");
    copyText.select();
    copyText.setSelectionRange(0,100000000);
    document.execCommand("copy");
}

function copytext4()
{
    var copyText = document.getElementById("textarea4_id");
    copyText.select();
    copyText.setSelectionRange(0,100000000);
    document.execCommand("copy");
}
async function pastetext1()
{
    const text = await navigator.clipboard.readText();
    document.getElementById("textarea1_id").value=text;
}
async function pastetext2()
{
    const text = await navigator.clipboard.readText();
    document.getElementById("textarea2_id").value=text;
}
async function pastetext3()
{
    const text = await navigator.clipboard.readText();
    document.getElementById("textarea3_id").value=text;
}
async function pastetext4()
{
    const text = await navigator.clipboard.readText();
    document.getElementById("textarea4_id").value=text;
}

function clearAll1()
{
    document.getElementById("textarea1_id").value="";
}
function clearAll2()
{
    document.getElementById("textarea2_id").value="";
}
function clearAll3()
{
    document.getElementById("textarea3_id").value="";
}
function clearAll4()
{
    document.getElementById("textarea4_id").value="";
}


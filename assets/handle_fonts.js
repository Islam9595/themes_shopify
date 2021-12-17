 $(document).ready(function () {
    function changeFont(font_family,font_style) {
    $('#display_font').css(
{"font-family": font_family,"font-style": font_style ,'font-size': '30px'}
    )
}
    function removeTextArea() {
    $('#result').remove()
    $('#display_font').remove()
}
    function updateFontWithText(element) {
    let font_data=element.find('option:selected').attr('data-name')
    console.log("omaremam")
    console.log(font_data)
    if(font_data.trim().length){
    let full_font_data=element.find('option:selected').attr('data-name');
    let font_data=full_font_data.split('.').slice(0, -1).join('.')
    font_data = font_data.split("_");
    let font_family=font_data[0];
    let font_style=font_data[1];
    let font_face = `@font-face {
                                     font-family: '${font_family}';
                                     font-style : '${font_style}';
                                        src: url('https://aiobo-bucket.s3-us-west-2.amazonaws.com/fonts/${full_font_data}') format('truetype'); }`
    if($('#'+font_data).length==0){
    $("<style id=''>"+font_face+"</style>").appendTo( "head" )
}
    let form=element.closest('form');
    let custom_text=form.find('input[data-input-type=text]').attr('id')
    let ext_opts_serialize=form.find('input[name="properties[_ext_opts_serialize]"]').attr('value')
    removeTextArea()
    var textArea = $('<textarea disabled   id="display_font" style="margin: 0px; width 1000px; height: 102px;"" />');
    textArea.text((JSON.parse(ext_opts_serialize))[custom_text]);
    element.after(textArea);
    element.after("<label id='result'>Result</label>");
    changeFont(font_family,font_style)
}
}

    $('select[name="166"]').on('change', function (e) {
    console.log("omarmemam")
    let font_data=$(this).find('option:selected').attr('value');
    if(font_data.length>0){
    updateFontWithText($(this))
}
    if(font_data.length==0){
    removeTextArea()
}
});
    $('input[type=text]').on('blur',function(e){
    let select_font=$('select[id="166"]');
    if(select_font.length>0 && $('#display_font').length>0){
    updateFontWithText(select_font)
}
});
});
function setting_true(){
  $('#glow-ingress-line1').html('拡張機能実行中');
  $('#glow-ingress-line2').html('非表示にしています');
  $('#contextualIngressPtLabel_deliveryShortLine').html('拡張機能：非表示にしています');
  $('#hmenu-customer-name').html('拡張機能：非表示にしています');
  $('#nav-link-accountList .nav-line-1').html('拡張：名前非表示中');
  $('#desktop-grid-1 .a-spacing-none.truncate-2line').html('拡張機能：名前を非表示にしています');
  $('#nav-profiles-dropdown-label .profiles-dropdown-name').html('拡張：名前非表示中');
  $('#ordersContainer .a-declarative .trigger-text').html('拡張機能：名前を非表示にしています');
  $('#ordersContainer .a-box-group.a-spacing-base.order .a-fixed-right-grid .a-color-secondary.value bdi').html('拡張機能が非表示にしています');
}


/*first start*/
$('#nav-tools').prepend('<div class="nav-a-2" id="hide-setting-but"><span class="nav-line-1">名前非表示拡張機能</span><span class="nav-line-2 nav-long-width">設定はこちら<span class="nav-icon nav-arrow" style="visibility: visible;"></span></span></div>');

$('#nav-flyout-anchor').prepend('<div id="hide-settings"><h3>Hide Amazon RealName</h3><div class="switch">非表示<label class="switch__label"><input type="checkbox" class="switch__input" id="setting-check" /><span class="switch__content"></span><span class="switch__circle"></span></label><input id="setting-save-but" type="button" value="保存"/></div></div>');

$('#hide-setting-but').hover(
  function() {
    $('#hide-settings').css('display','block')
  },
  function() {
    $('#hide-settings').css('display','none')
  }
);

chrome.storage.local.get(["start_count"], function(items) {
  if(items.start_count == undefined){
    chrome.storage.local.set({
        "start_count": "1",
        "setting" : "true"
    })};
});

/*非表示処理*/
chrome.storage.local.get(["setting"], function(items) {
  console.log("Hide-Amazon-RealName: Setting: " + items.setting);
  if(items.setting == "true"){
    setting_true();
  }
});


chrome.storage.local.get(["setting"], function(items) {
  if(items.setting == "true"){
    document.getElementById("setting-check").checked = true;
  }
});
document.getElementById("setting-save-but").onclick = function save_setting(){
  var checkbox = document.getElementById("setting-check");
  if(checkbox.checked){
    chrome.storage.local.set({
      "setting" : "true"
    });
    setting_true();
  }else{
    chrome.storage.local.set({
      "setting" : "false"
    });
    location.reload()
  }
}
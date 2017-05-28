<?php /* Smarty version Smarty-3.1.7, created on 2016-07-29 20:45:16
         compiled from "/home/shecodes/public_html/collab/includes/runtime/../../layouts/vlayout/modules/Vtiger/NoComments.tpl" */ ?>
<?php /*%%SmartyHeaderCode:1139395061579bc05cb2dce1-08472269%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '6b59906e71c0b98dfbc79ebc7517747602171f95' => 
    array (
      0 => '/home/shecodes/public_html/collab/includes/runtime/../../layouts/vlayout/modules/Vtiger/NoComments.tpl',
      1 => 1467767022,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1139395061579bc05cb2dce1-08472269',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'MODULE_NAME' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_579bc05cb32ba',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_579bc05cb32ba')) {function content_579bc05cb32ba($_smarty_tpl) {?>
<div class="summaryWidgetContainer noCommentsMsgContainer"><p class="textAlignCenter"> <?php echo vtranslate('LBL_NO_COMMENTS',$_smarty_tpl->tpl_vars['MODULE_NAME']->value);?>
</p></div><?php }} ?>
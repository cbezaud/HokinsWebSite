<?php

/**
 * @file
 * Default simple view template to all the fields as a row.
 *
 * - $view: The view in use.
 * - $fields: an array of $field objects. Each one contains:
 *   - $field->content: The output of the field.
 *   - $field->raw: The raw data for the field, if it exists. This is NOT output safe.
 *   - $field->class: The safe class id to use.
 *   - $field->handler: The Views field handler object controlling this field. Do not use
 *     var_export to dump this object, as it can't handle the recursion.
 *   - $field->inline: Whether or not the field should be inline.
 *   - $field->inline_html: either div or span based on the above flag.
 *   - $field->wrapper_prefix: A complete wrapper containing the inline_html to use.
 *   - $field->wrapper_suffix: The closing tag for the wrapper.
 *   - $field->separator: an optional separator that may appear before a field.
 *   - $field->label: The wrap label text to use.
 *   - $field->label_html: The full HTML of the label to use including
 *     configured element type.
 * - $row: The raw result object from the query, with all data it fetched.
 *
 * @ingroup views_templates
 */

$date_set = $row->field_field_setdate[0]['raw']['value'];
?>
<div class="cell-date">
    <span class="label">
        <strong><?php print date('d', $date_set);?></strong><?php print str_replace(
            array('Feb', 'Apr', 'May'),
            array('Fev', 'Avr', 'Mai'),
            date('M  y',$date_set)
        ); ?>
    </span>
</div>
<div class="cell-place">
    <h2><?php print $fields['field_setlieu']->content;?></h2>
    <address>
        <?php print $fields['field_setadresse']->content;?>
    </address>
</div>
<?php if (isset($row->field_field_setlien[0]['raw']['url']) && $row->field_field_setlien[0]['raw']['url'] != ""): ?>
<div class="cell-link">
    <a class="label"
       target="_blank"
       href="<?php print $row->field_field_setlien[0]['raw']['url']; ?>">
        <?php print $row->field_field_setlien[0]['raw']['title']; ?>
    </a>
</div>
<?php endif; ?>

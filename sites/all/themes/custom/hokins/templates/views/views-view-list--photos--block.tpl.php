<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * - $title : The title of this group of rows.  May be empty.
 * - $options['type'] will either be ul or ol.
 * @ingroup views_templates
 */
?>

<div class="zone-body">
    <div class="carrousel-wrapper">
        <ul class="list slides">
        <?php foreach ($rows as $id => $row): ?>
            <li class="slide <?php print $classes_array[$id]; ?>">
                <?php print $row; ?>
            </li>
        <?php endforeach; ?>
        </ul>
    </div><!--/.carrousel-wrapper -->
</div><!--/.zone-body -->


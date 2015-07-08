<?php
/**
 * @file
 * hokins_date.features.inc
 */

/**
 * Implements hook_views_api().
 */
function hokins_date_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function hokins_date_node_info() {
  $items = array(
    'date' => array(
      'name' => t('Date'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}

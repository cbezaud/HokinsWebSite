<?php
/**
 * @file
 * hokins_photo.features.inc
 */

/**
 * Implements hook_views_api().
 */
function hokins_photo_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function hokins_photo_node_info() {
  $items = array(
    'photos' => array(
      'name' => t('Photos'),
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

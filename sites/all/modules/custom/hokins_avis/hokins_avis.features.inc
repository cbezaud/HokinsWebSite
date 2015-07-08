<?php
/**
 * @file
 * hokins_avis.features.inc
 */

/**
 * Implements hook_views_api().
 */
function hokins_avis_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function hokins_avis_node_info() {
  $items = array(
    'avis' => array(
      'name' => t('Avis'),
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

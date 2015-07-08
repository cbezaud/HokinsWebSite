<?php
/**
 * @file
 * hokins_avis.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function hokins_avis_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'avis';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Avis';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Prochaines dates';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '0';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'list';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  /* Field: Content: Lien */
  $handler->display->display_options['fields']['field_avislien']['id'] = 'field_avislien';
  $handler->display->display_options['fields']['field_avislien']['table'] = 'field_data_field_avislien';
  $handler->display->display_options['fields']['field_avislien']['field'] = 'field_avislien';
  $handler->display->display_options['fields']['field_avislien']['label'] = '';
  $handler->display->display_options['fields']['field_avislien']['element_type'] = '0';
  $handler->display->display_options['fields']['field_avislien']['element_label_type'] = '0';
  $handler->display->display_options['fields']['field_avislien']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_avislien']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_avislien']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_avislien']['click_sort_column'] = 'url';
  /* Field: Content: Body */
  $handler->display->display_options['fields']['body']['id'] = 'body';
  $handler->display->display_options['fields']['body']['table'] = 'field_data_body';
  $handler->display->display_options['fields']['body']['field'] = 'body';
  $handler->display->display_options['fields']['body']['label'] = '';
  $handler->display->display_options['fields']['body']['element_type'] = '0';
  $handler->display->display_options['fields']['body']['element_label_type'] = '0';
  $handler->display->display_options['fields']['body']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['body']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['body']['element_default_classes'] = FALSE;
  /* Field: Content: Auteur */
  $handler->display->display_options['fields']['field_avisauteur']['id'] = 'field_avisauteur';
  $handler->display->display_options['fields']['field_avisauteur']['table'] = 'field_data_field_avisauteur';
  $handler->display->display_options['fields']['field_avisauteur']['field'] = 'field_avisauteur';
  $handler->display->display_options['fields']['field_avisauteur']['label'] = '';
  $handler->display->display_options['fields']['field_avisauteur']['element_type'] = '0';
  $handler->display->display_options['fields']['field_avisauteur']['element_label_type'] = '0';
  $handler->display->display_options['fields']['field_avisauteur']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_avisauteur']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_avisauteur']['element_default_classes'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'avis' => 'avis',
  );

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block');
  $export['avis'] = $view;

  return $export;
}

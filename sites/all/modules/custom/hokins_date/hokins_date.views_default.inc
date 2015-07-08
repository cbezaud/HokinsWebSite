<?php
/**
 * @file
 * hokins_date.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function hokins_date_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'dates';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Dates';
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
  /* Field: Content: Date */
  $handler->display->display_options['fields']['field_setdate']['id'] = 'field_setdate';
  $handler->display->display_options['fields']['field_setdate']['table'] = 'field_data_field_setdate';
  $handler->display->display_options['fields']['field_setdate']['field'] = 'field_setdate';
  $handler->display->display_options['fields']['field_setdate']['settings'] = array(
    'format_type' => 'long',
    'fromto' => 'both',
    'multiple_number' => '',
    'multiple_from' => '',
    'multiple_to' => '',
  );
  /* Field: Content: Lieu */
  $handler->display->display_options['fields']['field_setlieu']['id'] = 'field_setlieu';
  $handler->display->display_options['fields']['field_setlieu']['table'] = 'field_data_field_setlieu';
  $handler->display->display_options['fields']['field_setlieu']['field'] = 'field_setlieu';
  $handler->display->display_options['fields']['field_setlieu']['label'] = '';
  $handler->display->display_options['fields']['field_setlieu']['element_type'] = '0';
  $handler->display->display_options['fields']['field_setlieu']['element_label_type'] = '0';
  $handler->display->display_options['fields']['field_setlieu']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_setlieu']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_setlieu']['element_default_classes'] = FALSE;
  /* Field: Content: Adresse */
  $handler->display->display_options['fields']['field_setadresse']['id'] = 'field_setadresse';
  $handler->display->display_options['fields']['field_setadresse']['table'] = 'field_data_field_setadresse';
  $handler->display->display_options['fields']['field_setadresse']['field'] = 'field_setadresse';
  $handler->display->display_options['fields']['field_setadresse']['label'] = '';
  $handler->display->display_options['fields']['field_setadresse']['element_type'] = '0';
  $handler->display->display_options['fields']['field_setadresse']['element_label_type'] = '0';
  $handler->display->display_options['fields']['field_setadresse']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_setadresse']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_setadresse']['element_default_classes'] = FALSE;
  /* Field: Content: Lien */
  $handler->display->display_options['fields']['field_setlien']['id'] = 'field_setlien';
  $handler->display->display_options['fields']['field_setlien']['table'] = 'field_data_field_setlien';
  $handler->display->display_options['fields']['field_setlien']['field'] = 'field_setlien';
  $handler->display->display_options['fields']['field_setlien']['label'] = '';
  $handler->display->display_options['fields']['field_setlien']['element_type'] = '0';
  $handler->display->display_options['fields']['field_setlien']['element_label_type'] = '0';
  $handler->display->display_options['fields']['field_setlien']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_setlien']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_setlien']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_setlien']['click_sort_column'] = 'url';
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
    'date' => 'date',
  );

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block');
  $export['dates'] = $view;

  return $export;
}

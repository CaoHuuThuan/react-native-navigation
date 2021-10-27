const testIDs = {
  // Layouts
  STACK_BTN: 'STACK_BUTTON',
  SET_ROOT_NAVIGATION_TAB: 'SET_ROOT_NAVIGATION_TAB',
  SHOW_MODAL_PROMISE_RESULT: 'SHOW_MODAL_PROMISE_RESULT',
  PUSH_PROMISE_RESULT: 'PUSH_PROMISE_RESULT',
  POP_PROMISE_RESULT: 'POP_PROMISE_RESULT',
  MODAL_DISMISSED_LISTENER_RESULT: 'MODAL_DISMISSED_LISTENER_RESULT',
  DISMISS_MODAL_PROMISE_RESULT: 'DISMISS_MODAL_PROMISE_RESULT',
  BOTTOM_TABS_BTN: 'BOTTOM_TABS_BUTTON',
  EXTERNAL_COMP_BTN: 'EXTERNAL_COMPONENT_BUTTON',
  LAYOUTS_TAB: 'LAYOUTS_TAB',
  NAVIGATION_TAB: 'NAVIGATION_TAB',
  OPTIONS_TAB: 'OPTIONS_TAB',
  BUTTONS_TAB: 'BUTTONS_TAB',
  SIDE_MENU_INSIDE_BOTTOM_TABS_BTN: 'SIDE_MENU_INSIDE_BOTTOM_TABS',
  OVERLAY_BTN: 'OVERLAY_BTN',
  TEXT_INPUT1: 'TEXT_INPUT1',
  TEXT_INPUT2: 'TEXT_INPUT2',
  DISMISS_ALL_OVERLAYS_BUTTON: 'DISMISS_ALL_OVERLAYS_BUTTON',
  SIDE_MENU_BTN: 'SIDE_MENU_BTN',
  MODAL_COMMANDS_BTN: 'MODAL_COMMANDS_BTN',
  STACK_COMMANDS_BTN: 'STACK_COMMANDS_BTN',
  MODAL_BTN: 'SHOW_MODAL_BUTTON',
  SHOW_MODAL_FROM_DECLARED_BUTTON: 'SHOW_MODAL_FROM_DECLARED_BUTTON',
  MODAL_DISABLED_BACK_BTN: 'SHOW_MODAL_DISABLED_BACK_BTN',
  PAGE_SHEET_MODAL_BTN: 'SHOW_PAGE_SHEET_MODAL_BUTTON',
  DISMISS_MODAL_BTN: 'DISMISS_MODAL_BUTTON',
  DISMISS_REACT_MODAL_BTN: 'DISMISS_REACT_MODAL_BUTTON',
  DISMISS_MODAL_TOPBAR_BTN: 'DISMISS_MODAL_TOPBAR_BTN',
  CHANGE_LEFT_RIGHT_COLORS: 'CHANGE_LEFT_RIGHT_COLORS',
  MODAL_SCREEN_HEADER: 'MODAL_SCREEN_HEADER',
  ALERT_BUTTON: 'ALERT_BUTTON',
  OVERLAY_ALERT_HEADER: 'OVERLAY_ALERT_HEADER',
  SHOW_OVERLAY_BTN: 'SHOW_OVERLAY_BTN',
  SHOW_FULLSCREEN_OVERLAY_BTN: 'SHOW_FULLSCREEN_OVERLAY_BTN',
  OVERLAY_SCREEN: 'OVERLAY_SCREEN',
  OVERLAY_DISMISSED_COUNT: 'OVERLAY_DISMISSED_COUNT',
  SHOW_TOUCH_THROUGH_OVERLAY_BTN: 'SHOW_TOUCH_THROUGH_OVERLAY_BTN',
  DISMISS_BTN: 'DISMISS_BTN',
  STACK_SCREEN_HEADER: 'STACK_SCREEN_HEADER',
  BACK_BUTTON_SCREEN_HEADER: 'BACK_BUTTON_SCREEN_HEADER',
  BACK_BUTTON_SCREEN_BTN: 'BACK_BUTTON_SCREEN_BTN',
  PUSH_NO_ANIM_BTN: 'PUSH_NO_ANIM_BTN',
  POP_USING_STACK_ID_BTN: 'POP_USING_STACK_ID_BTN',
  POP_USING_PREVIOUS_SCREEN_ID_BTN: 'POP_USING_PREVIOUS_SCREEN_ID_BTN',
  POP_TO_FIRST_SCREEN_BTN: 'POP_TO_FIRST_SCREEN_BTN',
  POP_NONE_EXISTENT_SCREEN: 'POP_NONE_EXISTENT_SCREEN',
  MULTI_CHILD_STACK_BTN: 'MULTI_CHILD_STACK_BTN',
  EXTERNAL_COMP_SCREEN_HEADER: 'EXTERNAL_COMPONENT_SCREEN_HEADER',
  TOP_BAR: 'TOP_BAR',
  LAZY_TOP_PAR: 'LAZY_TOP_PAR',
  PUSH_BTN: 'PUSH_BUTTON',
  PUSH_DISABLED_BACK_BTN: 'PUSH_DISABLED_BACK_BTN',
  PUSH_DISABLED_HARDWARE_BACK_BTN: 'PUSH_DISABLED_HARDWARE_BACK_BTN',
  PUSH_DETAILS_BTN: 'PUSH_DETAILS_BUTTON',
  PUSH_MASTER_BTN: 'PUSH_MASTER_BUTTON',
  PUSH_LAZY_BTN: 'PUSH_LAZY_BTN',
  PUSH_SIDE_MENU_BTN: 'PUSH_SIDE_MENU_BTN',
  TOGGLE_BACK_BUTTON_VISIBILITY: 'TOGGLE_BACK_BUTTON_VISIBILITY',
  SHOW_STATIC_EVENTS_SCREEN: 'SHOW_STATIC_EVENTS_SCREEN',
  POP_BTN: 'POP_BUTTON',
  BACK_HANDLER_BTN: 'BACK_HANDLER_BUTTON',
  POP_TO_ROOT_BTN: 'POP_TO_ROOT',
  POP_NONE_EXISTENT_SCREEN_BTN: 'POP_NONE_EXISTENT_SCREEN_BTN',
  TOP_BAR_BTN: 'TOP_BAR_BUTTON',
  CUSTOM_BACK_BTN: 'CUSTOM_BACK_BUTTON',
  PUSH_CUSTOM_BACK_BTN: 'PUSH_CUSTOM_BACK_BTN',
  PUSH_TITLE_WITH_SUBTITLE: 'PUSH_TITLE_WITH_SUBTITLE',
  BACK_BUTTON: 'BACK_BUTTON',
  TOGGLE_BACK: 'TOGGLE_BACK',
  SWITCH_TAB_BY_INDEX_BTN: 'SWITCH_TAB_BY_INDEX_BTN',
  SWITCH_TAB_BY_COMPONENT_ID_BTN: 'SWITCH_TAB_BY_COMPONENT_ID_BTN',
  PUSHED_BOTTOM_TABS: 'PUSHED_BOTTOM_TABS',
  CHANGE_TITLE_BTN: 'CHANGE_TITLE_BTN',
  SHOW_TOP_BAR_BTN: 'SHOW_TOP_BAR_BUTTON',
  HIDE_TOP_BAR_BTN: 'HIDE_TOP_BAR_BUTTON',
  SHOW_SEARCH_BAR_BTN: 'SHOW_SEARCH_BAR_BTN',
  HIDE_SEARCH_BAR_BTN: 'HIDE_SEARCH_BAR_BTN',
  GOTO_SEARCHBAR_SCREEN: 'GOTO_SEARCHBAR_SCREEN',
  GOTO_SEARCHBAR_MODAL: 'GOTO_SEARCHBAR_MODAL',
  GOTO_TOP_BAR_SCREEN: 'GOTO_TOP_BAR_SCREEN',
  SET_BADGE_BTN: 'SET_BADGE_BTN',
  CLEAR_BADGE_BTN: 'CLEAR_BADGE_BTN',
  BOTTOM_TABS: 'BOTTOM_TABS',
  MAIN_BOTTOM_TABS: 'MAIN_BOTTOM_TABS',
  HIDE_TABS_BTN: 'HIDE_TABS_BTN',
  SHOW_TABS_BTN: 'SHOW_TABS_BTN',
  HIDE_TABS_PUSH_BTN: 'HIDE_TABS_PUSH_BTN',
  ROUND_BUTTON: 'ROUND_BUTTON',
  ROUND_BUTTON_2: 'ROUND_BUTTON_2',
  BUTTON_ONE: 'BUTTON_ONE',
  BUTTON_THREE: 'BUTTON_THREE',
  LEFT_BUTTON: 'LEFT_BUTTON',
  HIDE_TOPBAR_DEFAULT_OPTIONS: 'HIDE_TOPBAR_DEFAULT_OPTIONS',
  SET_TOPBAR_REACT_VIEW: 'SET_TOPBAR_REACT_VIEW',
  SHOW_YELLOW_BOX_BTN: 'SHOW_YELLOW_BOX_BTN',
  SET_REACT_TITLE_VIEW: 'SET_REACT_TITLE_VIEW',
  SET_TITLE: 'SET_TITLE',
  STATIC_EVENTS_OVERLAY_BTN: 'STATIC_EVENTS_OVERLAY_BTN',
  PUSH_LIFECYCLE_BTN: 'PUSH_LIFECYCLE_BTN',
  MODAL_LIFECYCLE_BTN: 'MODAL_LIFECYCLE_BTN',
  DISMISS_ALL_PREVIOUS_MODAL_BTN: 'DISMISS_ALL_PREVIOUS_MODAL_BTN',
  DISMISS_PREVIOUS_MODAL_BTN: 'DISMISS_PREVIOUS_MODAL_BTN',
  DISMISS_UNKNOWN_MODAL_BTN: 'DISMISS_UNKNOWN_MODAL_BTN',
  PUSH_TO_TEST_DID_DISAPPEAR_BTN: 'PUSH_TO_TEST_DID_DISAPPEAR_BTN',
  SET_ROOT_BTN: 'SET_ROOT_BTN',
  SET_MULTIPLE_ROOTS_BTN: 'SET_MULTIPLE_ROOTS_BTN',
  SET_ROOT_WITH_STACK_HIDES_BOTTOM_TABS_BTN: 'SET_ROOT_WITH_STACK_HIDES_BOTTOM_TABS_BTN',
  SET_ROOT_WITHOUT_STACK_HIDES_BOTTOM_TABS_BTN: 'SET_ROOT_WITHOUT_STACK_HIDES_BOTTOM_TABS_BTN',
  SET_ROOT_HIDES_BOTTOM_TABS_BTN: 'SET_ROOT_HIDES_BOTTOM_TABS_BTN',
  ADD_BACK_HANDLER: 'ADD_BACK_HANDLER',
  REMOVE_BACK_HANDLER: 'REMOVE_BACK_HANDLER',
  OPEN_LEFT_SIDE_MENU_BTN: 'OPEN_LEFT_SIDE_MENU_BTN',
  OPEN_RIGHT_SIDE_MENU_BTN: 'OPEN_RIGHT_SIDE_MENU_BUTTON',
  CHANGE_LEFT_SIDE_MENU_WIDTH_BTN: 'CHANGE_LEFT_SIDE_MENU_WIDTH_BUTTON',
  CHANGE_RIGHT_SIDE_MENU_WIDTH_BTN: 'CHANGE_RIGHT_SIDE_MENU_WIDTH_BUTTON',
  CLOSE_LEFT_SIDE_MENU_BTN: 'CLOSE_LEFT_SIDE_MENU_BTN',
  CLOSE_RIGHT_SIDE_MENU_BTN: 'CLOSE_RIGHT_SIDE_MENU_BTN',
  SIDE_MENU_PUSH_BTN: 'SIDE_MENU_PUSH_BUTTON',
  LEFT_SIDE_MENU_PUSH_BTN: 'LEFT_SIDE_MENU_PUSH_BUTTON',
  LEFT_SIDE_MENU_PUSH_AND_CLOSE_BTN: 'LEFT_SIDE_MENU_PUSH_AND_CLOSE_BTN',
  RIGHT_SIDE_MENU_PUSH_BTN: 'RIGHT_SIDE_MENU_PUSH_BUTTON',
  CENTER_SCREEN_HEADER: 'CENTER_SCREEN_HEADER',
  SIDE_MENU_TAB: 'SIDE_MENU_TAB',
  FLAT_LIST_BTN: 'FLAT_LIST_BTN',
  SHOW_ORIENTATION_SCREEN: 'SHOW_ORIENTATION_SCREEN',
  LANDSCAPE_PORTRAIT_ORIENTATION_BTN: 'LANDSCAPE_PORTRAIT_ORIENTATION_BTN',
  PORTRAIT_ORIENTATION_BTN: 'PORTRAIT_ORIENTATION_BTN',
  LANDSCAPE_ORIENTATION_BTN: 'LANDSCAPE_ORIENTATION_BTN',
  CLEAR_OVERLAY_EVENTS_BTN: 'CLEAR_OVERLAY_EVENTS_BTN',
  SEARCH_BTN: 'SEARCH_BTN',
  SET_STACK_ROOT_BTN: 'SET_STACK_ROOT_BTN',
  SET_STACK_ROOT_WITH_ID_BTN: 'SET_STACK_ROOT_WITH_ID_BTN',
  NAVIGATION_SCREEN: `NAVIGATION_SCREEN`,

  // Buttons
  ADD_COMPONENT_BUTTON: 'ADD_COMPONENT_BUTTON',
  SET_RIGHT_BUTTONS: 'SET_RIGHT_BUTTONS',
  ADD_BUTTON_ROUND: 'ADD_BUTTON_ROUND',
  ADD_BUTTON_RIGHT: 'ADD_BUTTON_RIGHT',
  TAB_BASED_APP_BUTTON: `TAB_BASED_APP_BUTTON`,
  TAB_BASED_APP_SIDE_BUTTON: `TAB_BASED_APP_SIDE_BUTTON`,
  TEXTUAL_LEFT_BUTTON: 'TEXTUAL_LEFT_BUTTON',
  TOAST_BTN: 'TOAST_BTN',
  TOAST_OK_BTN_OUTER: 'TOAST_OK_BTN_OUTER',
  TOAST_OK_BTN_INNER: 'TOAST_OK_BTN_INNER',
  PUSH_STATIC_LIFECYCLE_BUTTON: `PUSH_STATIC_LIFECYCLE_BUTTON`,
  PUSH_CONTEXT_SCREEN_BUTTON: `PUSH_CONTEXT_SCREEN_BUTTON`,
  PUSH_OPTIONS_BUTTON: `PUSH_OPTIONS_BUTTON`,
  PUSH_DEFAULT_OPTIONS_BUTTON: `PUSH_DEFAULT_OPTIONS_BUTTON`,
  SCREEN_POPPED_BTN: 'SCREEN_POPPED_BTN',
  SHOW_REDBOX_BUTTON: `SHOW_REDBOX_BUTTON`,
  ORIENTATION_BTN: `ORIENTATION_BUTTON`,
  PROVIDED_ID: `PROVIDED_ID`,
  DISMISS_ALL_MODALS_BTN: `DISMISS_ALL_MODALS_BUTTON`,
  DISMISS_FIRST_MODAL_BTN: `DISMISS_FIRST_MODAL_BUTTON`,
  POP_PREVIOUS_BUTTON: `POP_PREVIOUS_BUTTON`,
  POP_STACK_POSITION_ONE_BUTTON: `POP_STACK_POSITION_ONE_BUTTON`,
  DYNAMIC_OPTIONS_BUTTON: `DYNAMIC_OPTIONS_BUTTON`,
  SCROLLVIEW_SCREEN_BUTTON: `SCROLLVIEW_SCREEN_BUTTON`,
  HIDE_FAB: `HIDE_FAB`,
  SHOW_SNACKBAR_BUTTON: `SHOW_SNACKBAR_BUTTON`,
  TOGGLE_TOP_BAR_HIDE_ON_SCROLL: `TOGGLE_TOP_BAR_HIDE_ON_SCROLL`,
  SET_TAB_BADGE_BUTTON: `SET_TAB_BADGE_BUTTON`,
  SET_TAB_BADGE_BUTTON_NULL: `SET_TAB_BADGE_BUTTON_NULL`,
  PUSH_BUTTON_WAIT_FOR_RENDER: `PUSH_AND_WAIT_FOR_RENDER`,
  PUSH_CUSTOM_BACK_BUTTON: `PUSH_CUSTOM_BACK_BUTTON`,
  SHOW_BOTTOM_TABS_BUTTON: `SHOW_BOTTOM_TABS_BUTTON`,
  FIRST_TAB_BAR_BUTTON: `FIRST_TAB_BAR_BUTTON`,
  SECOND_TAB_BAR_BTN: `SECOND_TAB_BAR_BUTTON`,
  THIRD_TAB_BAR_BTN: `THIRD_TAB_BAR_BUTTON`,
  SHOW_TOUCH_THROUGH_OVERLAY_SCROLLER: `SHOW_TOUCH_THROUGH_OVERLAY_SCROLLER`,
  OK_BUTTON: `OK_BUTTON`,
  MODAL_WITH_STACK_BUTTON: `MODAL_WITH_STACK_BUTTON`,
  CUSTOM_TRANSITION_BUTTON: `CUSTOM_TRANSITION_BUTTON`,
  COMPLEX_LAYOUT_BUTTON: `COMPLEX_LAYOUT_BUTTON`,
  EXTERNAL_COMPONENT_IN_STACK: `EXTERNAL_COMPONENT_IN_STACK`,
  SPLIT_VIEW_BUTTON: `SPLIT_VIEW_BUTTON`,
  KEYBOARD_SCREEN_BTN: `KEYBOARD_SCREEN_BTN`,
  SHOW_PREVIEW_BUTTON: `SHOW_PREVIEW_BUTTON`,
  SEARCH_RESULT_ITEM: `SEARCH_RESULT_ITEM`,
  SIDE_MENU_LAYOUT_INSIDE_BOTTOM_TAB: `SIDE_MENU_LAYOUT_INSIDE_BOTTOM_TAB`,
  SET_INTERCEPT_TOUCH: `SET_INTERCEPT_TOUCH`,
  PUSH_BOTTOM_TABS_BUTTON: `PUSH_BOTTOM_TABS_BUTTON`,
  SET_STACK_ROOT_BUTTON: `SET_STACK_ROOT_BUTTON`,
  SET_ROOT: 'SET_ROOT',
  RESET_BUTTONS: 'RESET_BUTTONS',
  SHOW_LIFECYCLE_BTN: 'SHOW_LIFECYCLE_BTN',
  CHANGE_BUTTON_PROPS: 'CHANGE_BUTTON_PROPS',
  SHOW_RIGHT_BUTTON: 'SHOW_RIGHT_BUTTON',
  GOTO_BUTTONS_SCREEN: 'GOTO_BUTTONS_SCREEN',
  REGISTER_MODAL_DISMISS_EVENT_BTN: 'REGISTER_MODAL_DISMISS_EVENT_BTN',
  HIDE_PREVIOUS_SCREEN_TOP_BAR: 'HIDE_PREVIOUS_SCREEN_TOP_BAR',
  COCKTAILS_DETAILS_HEADER: 'COCKTAILS_DETAILS_HEADER',
  SIDE_MENU_LEFT_DRAWER_HEIGHT_TEXT: 'SIDE_MENU_LEFT_DRAWER_HEIGHT_TEXT',
  SIDE_MENU_LEFT_DRAWER_WIDTH_TEXT: 'SIDE_MENU_LEFT_DRAWER_WIDTH_TEXT',
  SIDE_MENU_RIGHT_DRAWER_WIDTH_TEXT: 'SIDE_MENU_RIGHT_DRAWER_WIDTH_TEXT',
  TOGGLE_REACT_DECLARED_MODAL: 'TOGGLE_REACT_DECLARED_MODAL',

  //External Component Buttons
  EXTERNAL_DISMISS_MODAL_BTN: 'EXTERNAL_DISMISS_MODAL_BTN',
  EXTERNAL_TOP_BAR_RIGHT_BTN: 'EXTERNAL_TOP_BAR_RIGHT_BTN',
  GOTO_SHARED_ELEMENT_SCREEN: 'GOTO_SHARED_ELEMENT_SCREEN',
  PUSH_NATIVE_BTN: 'PUSH_NATIVE_BTN',
  POP_NATIVE_BTN: 'POP_NATIVE_BTN',

  // Elements
  SCROLLVIEW_ELEMENT: `SCROLLVIEW_ELEMENT`,
  BOTTOM_TABS_ELEMENT: `BOTTOM_TABS_ELEMENT`,
  LANDSCAPE_ELEMENT: `LANDSCAPE_ELEMENT`,
  PORTRAIT_ELEMENT: `PORTRAIT_ELEMENT`,

  // Headers
  WELCOME_SCREEN_HEADER: `WELCOME_SCREEN_HEADER`,
  PUSHED_SCREEN_HEADER: `PUSHED_SCREEN_HEADER`,
  LAZILY_REGISTERED_SCREEN_HEADER: `LAZILY_REGISTERED_SCREEN_HEADER`,
  OPTIONS_SCREEN_HEADER: `OPTIONS_SCREEN_HEADER`,
  MODAL_SCREEN: `MODAL_SCREEN`,
  CENTERED_TEXT_HEADER: `CENTERED_TEXT_HEADER`,
};

export default testIDs;

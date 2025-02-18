import type * as React from "react";
import { ViewStyle, TextStyle } from "react-native";

export interface SelectListProps {
  /**
   * Fn to set Selected option value which will be stored in your local state
   */
  setSelected: Function;

  /**
   * Placeholder text that will be displayed in the select box
   */
  placeholder?: string;

  /**
   * Additional styles for select box
   */
  boxStyles?: ViewStyle;

  /**
   *  	Additional styles for text of select box
   */
  inputStyles?: TextStyle;

  /**
   *  	Additional styles for dropdown scrollview
   */
  dropdownStyles?: ViewStyle;

  /**
   *  Additional styles for dropdown list item
   */
  dropdownItemStyles?: ViewStyle;

  /**
   * Additional styles for list items text
   */
  dropdownTextStyles?: TextStyle;

  /**
   * Maximum height of the dropdown wrapper to occupy
   */
  maxHeight?: number;

  /**
   * Data which will be iterated as options of select list
   */
  data: Array<{}>;

  /**
   * The default option of the select list
   */
  defaultOption?: { key: any; value: any };

  /**
   * Pass any JSX to this prop like Text, Image or Icon to show instead of search icon
   */
  searchicon?: JSX.Element;

  /**
   *  Pass any JSX to this prop like Text, Image or Icon to show instead of chevron icon
   */
  arrowicon?: JSX.Element;

  /**
   * set to false if you dont want to use search functionality
   */
  search?: boolean;

  /**
   * additional placeholder for search text input
   */
  searchPlaceholder?: string;

  /**
   * search placeholder color for search text input
   */
  searchPlaceholderColor?: string;

  /**
   * Trigger an action when option is selected
   */
  onSelect?: () => void;

  /**
   * set fontFamily of whole component Text
   */
  fontFamily?: string;

  /**
   * set this to change the default search failure text
   */
  notFoundText?: string;

  /**
   * Additional styles for disabled list item
   */
  disabledItemStyles?: ViewStyle;

  /**
   * Additional styles for disabled list items text
   */
  disabledTextStyles?: TextStyle;

  /**
   * What to store inside your local state (key or value)
   */
  save?: "key" | "value";

  /**
   * Control the dropdown with this prop
   */
  dropdownShown?: boolean;

  /**
   *  Pass any JSX to this prop like Text, Image or Icon to show instead of close icon
   */
  closeicon?: JSX.Element;

  /**
   * Custom User Input If not found in list
   */
  customUserInput?: boolean;

  /**
   * If you want to use api search
   */
  isApiSearch?: boolean;

  /**
   * Have to use with isApiSearch
   */
  loader?: boolean;

  /**
   * Have to use with isApiSearch
   */
  loaderSize?: number | string;

  /**
   * Have to use with isApiSearch
   */
  loaderColor?: string;

  /**
   * Have to use with isApiSearch
   */
  setSearchValue?: Function;
}

export interface MultipleSelectListProps {
  /**
   * Fn to set Selected option value which will be stored in your local state
   */
  setSelected: Function;

  /**
   * Placeholder text that will be displayed in the select box
   */
  placeholder?: string;

  /**
   * Additional styles for select box
   */
  boxStyles?: ViewStyle;

  /**
   *  	Additional styles for text of select box
   */
  inputStyles?: TextStyle;

  /**
   *  	Additional styles for dropdown scrollview
   */
  dropdownStyles?: ViewStyle;

  /**
   *  Additional styles for dropdown list item
   */
  dropdownItemStyles?: ViewStyle;

  /**
   * Additional styles for list items text
   */
  dropdownTextStyles?: TextStyle;

  /**
   * Maximum height of the dropdown wrapper to occupy
   */
  maxHeight?: number;

  /**
   * Data which will be iterated as options of select list
   */
  data: Array<{}>;

  /**
   * The default option of the select list
   */
  defaultOption?: [];

  /**
   * Pass any JSX to this prop like Text, Image or Icon to show instead of search icon
   */
  searchicon?: JSX.Element;

  /**
   *  Pass any JSX to this prop like Text, Image or Icon to show instead of chevron icon
   */
  arrowicon?: JSX.Element;

  /**
   * set to false if you dont want to use search functionality
   */
  search?: boolean;

  /**
   * set to false if you dont want to use search functionality
   */
  searchPlaceholder?: string;

  /**
   * search placeholder color for search text input
   */
  searchPlaceholderColor?: string;

  /**
   * Trigger an action when option is selected
   */
  onSelect?: () => void;

  /**
   * set text of label which appears soon after multiple values are selected
   */
  label?: string;

  /**
   * set fontFamily of whole component Text
   */
  fontFamily?: string;

  /**
   * set this to change the default search failure text
   */
  notFoundText?: string;

  /**
   * Additional styles for disabled list item
   */
  disabledItemStyles?: ViewStyle;

  /**
   * Additional styles for disabled list items text
   */
  disabledTextStyles?: TextStyle;

  /**
   * Additional styles for disabled checkbox
   */
  disabledCheckBoxStyles?: ViewStyle;

  /**
   * Additional styles for checkbox
   */
  checkBoxStyles?: ViewStyle;

  /**
   * What to store inside your local state (key or value)
   */
  save?: "key" | "value";

  /**
   * Control the dropdown with this prop
   */
  dropdownShown?: boolean;

  /**
   *  Pass any JSX to this prop like Text, Image or Icon to show instead of close icon
   */
  closeicon?: JSX.Element;

  /**
   *  Pass any JSX to this prop like Text, Image or Icon to show instead of check icon
   */
  checkicon?: JSX.Element;

  /**
   * Additional styles for multiselect badge
   */
  badgeStyles?: ViewStyle;

  /**
   * Additional styles for multiselect badge text
   */
  badgeTextStyles?: ViewStyle;

  /**
   * Additional styles for label
   */
  labelStyles?: TextStyle;

  /**
   * Set Label Heading color
   */
  labelHeadingColor?: TextStyle;

  /**
   * Set Label Heading color
   */
  showSelected?: boolean;

  /**
   * Custom User Input If not found in list
   */
  customUserInput?: boolean;

  /**
   * Fn to set Custom Filtered Data
   */
  setData: Function;

  /**
   * Fn to set Custom Default Option
   */
  setDefaultOption: Function;

  /**
   * If you want to use api search
   */
  isApiSearch?: boolean;

  /**
   * Have to use with isApiSearch
   */
  loader?: boolean;

  /**
   * Have to use with isApiSearch
   */
  loaderSize?: number | string;

  /**
   * Have to use with isApiSearch
   */
  loaderColor?: string;

  /**
   * Have to use with isApiSearch
   */
  setSearchValue?: Function;
}

declare class MultipleSelectList extends React.Component<MultipleSelectListProps> {}

declare class SelectList extends React.Component<SelectListProps> {}

export { MultipleSelectList, SelectList };

import React from "react";
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps as RNInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { BaseColors, BaseFonts } from "../../theme";
import { default as Icon, IconProps } from "../vector-icons";

export type Props = RNInputProps & {
  /**
   * Whether the TextInput type is password
   * @default false
   */
  readonly isPassword?: boolean;
  /**
   * Text input background color
   * @default #FFFFFF
   */
  readonly backgroundColor?: string;
  /**
   * Style for Input Component
   */
  readonly inputStyle?: StyleProp<TextStyle>;
  /**
   * TextInput wrapper style. Contains: label, input, error section
   */
  readonly wrapperStyle?: StyleProp<ViewStyle>;
  /**
   * Input label
   */
  readonly label?: string;
  /**
   * Error message text and error icon will be displayed.
   */
  readonly errorMessage?: string;
  /**
   * Error message icon props
   */
  readonly errorMessageIconProps?: IconProps;
  /**
   * Left aligned input icon
   */
  readonly startIcon?: IconProps;
  /**
   * TextInput left aligned custom element, overrides startIcon
   *
   * ```js
   *  <TextInput
   *     renderStartElement={() => (
   *       <View>
   *         <Image
   *           style={{ width: 30, height: 30 }}
   *           source={{
   *             uri: "customImageUrl",
   *           }}
   *         />
   *       </View>
   *     )}
   *   />
   * }
   * ```
   */
  readonly renderStartElement?: () => React.ReactNode;
  /**
   * Overrides default TextInput and renders provided element
   *
   * ```js
   *  <TextInput
   *     renderInput={() => (
   *       <MyInputComponent/>
   *     )}
   *   />
   * }
   * ```
   */
  readonly renderInput?: () => React.ReactNode;
  /**
   * Right aligned TextInput icon
   */
  readonly endIcon?: IconProps;
  /**
   * TextInput right aligned custom element, overrides endIcon
   *
   * ```js
   *  <TextInput
   *     renderEndElement={() => (
   *       <View>
   *         <Image
   *           style={{ width: 30, height: 30 }}
   *           source={{
   *             uri: "customImageUrl",
   *           }}
   *         />
   *       </View>
   *     )}
   *   />
   * }
   * ```
   */
  readonly renderEndElement?: () => React.ReactNode;
  /**
   * Right aligned text
   * @overrides endIcon prop
   */
  readonly endText?: string;
  /**
   * End text style
   */
  readonly endTextStyle?: StyleProp<TextStyle>;
  /**
   * Whether it should show loading indicator at the end of input
   * @overrides endText, endIconProps
   */
  readonly loading?: boolean;
  /**
   * Loading indicator props
   * @see ActivityIndicatorProps
   */
  readonly loadingProps?: ActivityIndicatorProps;
  /**
   * Renders loading section of the TextInput
   *
   * ```js
   *   <TextInput
   *     loading
   *     renderLoading={(containerStyle) => (
   *       // inject computed container style
   *       <View style={[containerStyle, myCustomStyle]}>
   *         <Text>Loading...</Text>
   *       </View>
   *     )}
   *   />
   * ```
   */
  readonly renderLoading?: (
    containerStyle: StyleProp<ViewStyle>,
  ) => React.ReactNode;
  /**
   * Renders custom password icon while overriding default one. Ensure isPassword is set to true.
   *
   * ```js
   *  <TextInput
   *    isPassword
   *    renderPasswordIcon={({ isSecureTextEntry, toggleSecureTextEntry }) =>
   *      isSecureTextEntry ? (
   *        <Icon onPress={toggleSecureTextEntry} name="eye" type="Feather" />
   *      ) : (
   *        <Icon
   *          onPress={toggleSecureTextEntry}
   *          name="eye-off"
   *          type="Feather"
   *        />
   *      )
   *    }
   *  />
   * ```
   */
  readonly renderPasswordIcon?: ({
    isSecureTextEntry,
    toggleSecureTextEntry,
  }: {
    isSecureTextEntry: boolean;
    toggleSecureTextEntry: () => void;
  }) => React.ReactNode;
  /**
   * Whether all interactions are disabled in the TextInput
   * Background color will be grey in case of true.
   * @default false
   */
  readonly disabled?: boolean;
  /**
   * Hides default end icons for password and text type input
   * (close icon for text and eye icon for password input)
   * @default false
   */
  readonly hideDefaultEndIcons?: boolean;
  /**
   * Custom text input height
   * @default 56
   */
  readonly height?: number;
  /**
   * Custom text input border radius
   */
  readonly borderRadius?: number;
  /**
   * Label style
   */
  readonly labelStyle?: StyleProp<TextStyle>;
  /**
   * TextInput border color
   */
  readonly borderColor?: string;
  /**
   * Color of error which will be applied to the TextInput border, error icon and error text
   * @default rgba(253, 81, 95, 1)
   */
  readonly errorColor?: string;
  /**
   * Renders error section of the TextInput
   *
   * ```js
   *  <TextInput
   *    {...rest}
   *    renderErrorSection={({ containerStyle, errorMessage }) => {
   *     // inject computed container style
   *     return (
   *        <View style={[containerStyle, myCustomStyle]}>
   *          <Text>{errorMessage}</Text>
   *        </View>
   *      );
   *    }}
   *  />
   * }
   * ```
   */
  readonly renderErrorSection?: ({
    errorMessage,
    containerStyle,
  }: {
    errorMessage?: string;
    containerStyle: StyleProp<ViewStyle>;
  }) => void;
};

const INPUT_ELEMENT_HORIZONTAL_SPACING = 12;

const INPUT_INNER_HORIZONTAL_SPACING = 30;

const DEFAULT_INPUT_PADDING_HORIZONTAL = 16;

const DEFAULT_INPUT_HEIGHT = 56;

const defaultIconProps: Pick<IconProps, "size" | "color"> = {
  size: 24,
  color: BaseColors.textLight,
};

const Input: React.ForwardRefRenderFunction<TextInput, Props> = (
  {
    value,
    label,
    renderStartElement,
    renderEndElement,
    style,
    backgroundColor = "#FFFFFF",
    startIcon: startIconProps,
    loading,
    endText,
    wrapperStyle,
    inputStyle,
    endIcon: endIconProps,
    onChangeText,
    errorMessage,
    labelStyle,
    renderLoading,
    renderInput,
    renderErrorSection,
    renderPasswordIcon,
    errorMessageIconProps,
    loadingProps,
    endTextStyle,
    hideDefaultEndIcons = false,
    height = DEFAULT_INPUT_HEIGHT,
    errorColor = BaseColors.textRed,
    disabled = false,
    borderRadius = 8,
    borderColor = BaseColors.grey,
    autoCapitalize = "none",
    isPassword = false,
    ...props
  }: Props,
  ref: React.ForwardedRef<TextInput>,
) => {
  const [isSecureTextEntry, setSecureTextEntry] =
    React.useState<boolean>(isPassword);

  const shouldDisplayClearTextIcon =
    !hideDefaultEndIcons &&
    (value?.length ?? 0) > 0 &&
    !isPassword &&
    !disabled;

  const shouldDisplayPasswordIcon =
    !hideDefaultEndIcons && (value?.length ?? 0) > 0 && isPassword;

  /**
   * Resets input value on pressing end clear icon
   */
  const resetText = React.useCallback(() => {
    onChangeText?.("");
  }, [onChangeText]);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry((prev) => !prev);
  };

  const getComputedEndIconProps = (): IconProps | undefined => {
    // Props end icon
    if (endIconProps) {
      return {
        ...endIconProps,
      };
    }
    // End icon - text clear
    if (shouldDisplayClearTextIcon) {
      return {
        ...defaultIconProps,
        name: "close-circle",
        type: "Ionicons",
        onPress: resetText,
      };
    }
    // End icon - password eye
    else if (shouldDisplayPasswordIcon) {
      return {
        ...defaultIconProps,
        type: "Ionicons",
        onPress: toggleSecureTextEntry,
        name: isSecureTextEntry ? "eye-sharp" : "eye-off",
      };
    }

    return undefined;
  };

  const computedEndIconProps = getComputedEndIconProps();

  const shouldDisplayStartIcon =
    renderStartElement === undefined && startIconProps;

  const shouldDisplayCustomPasswordIcon =
    isPassword && renderPasswordIcon !== undefined;

  const shouldDisplayEndIcon =
    !loading &&
    computedEndIconProps &&
    renderEndElement === undefined &&
    !shouldDisplayCustomPasswordIcon &&
    !endText;

  const estimatedEndTextWidth =
    (endText?.length ?? 0) * ((endText?.length ?? 0) >= 15 ? 7.2 : 6);

  return (
    <View
      style={StyleSheet.flatten<ViewStyle>([styles.rootWrapper, wrapperStyle])}>
      {label !== undefined && (
        <View style={styles.labelContainer}>
          <Text
            style={StyleSheet.flatten<TextStyle>([styles.label, labelStyle])}>
            {label}
          </Text>
        </View>
      )}

      <View style={styles.centerContainer}>
        <View style={styles.startIconContainer}>
          {renderStartElement?.()}

          {shouldDisplayStartIcon && (
            <Icon {...defaultIconProps} {...startIconProps} />
          )}
        </View>

        {renderInput === undefined ? (
          <TextInput
            ref={ref}
            placeholderTextColor={BaseColors.placeholder}
            autoCapitalize={autoCapitalize}
            onChangeText={onChangeText}
            style={StyleSheet.flatten<TextStyle>([
              styles.textInput,
              {
                paddingLeft: startIconProps
                  ? INPUT_INNER_HORIZONTAL_SPACING +
                    INPUT_ELEMENT_HORIZONTAL_SPACING
                  : DEFAULT_INPUT_PADDING_HORIZONTAL,
                paddingRight:
                  computedEndIconProps || loading
                    ? INPUT_INNER_HORIZONTAL_SPACING +
                      INPUT_ELEMENT_HORIZONTAL_SPACING +
                      estimatedEndTextWidth
                    : DEFAULT_INPUT_PADDING_HORIZONTAL,
                borderRadius,
                height,
                backgroundColor,
                borderColor:
                  errorMessage !== undefined ? errorColor : borderColor,
              },
              style,
              inputStyle,
            ])}
            value={value}
            secureTextEntry={isSecureTextEntry}
            {...props}
          />
        ) : (
          renderInput()
        )}

        <View style={styles.endIconContainer}>
          {renderEndElement?.()}

          {shouldDisplayCustomPasswordIcon &&
            renderPasswordIcon?.({ isSecureTextEntry, toggleSecureTextEntry })}

          {shouldDisplayEndIcon && (
            <Icon {...defaultIconProps} {...computedEndIconProps} />
          )}
        </View>

        {loading && (
          <>
            {renderLoading?.(styles.loadingIndicator)}

            {renderLoading === undefined && (
              <ActivityIndicator
                style={styles.loadingIndicator}
                size={20}
                color={BaseColors.primary}
                {...loadingProps}
              />
            )}
          </>
        )}

        {!loading && endText !== undefined && (
          <Text style={[styles.endText, endTextStyle]}>{endText}</Text>
        )}
      </View>

      {errorMessage !== undefined && (
        <>
          {renderErrorSection?.({
            errorMessage,
            containerStyle: styles.errorMessageContainer,
          })}

          {renderErrorSection === undefined && (
            <View style={styles.errorMessageContainer}>
              <Icon
                size={16}
                style={styles.errorMessageIcon}
                type="MaterialIcons"
                name="error"
                color={errorColor}
                {...errorMessageIconProps}
              />
              <Text
                style={StyleSheet.flatten<TextStyle>([
                  styles.errorMessageText,
                  { color: errorColor },
                ])}>
                {errorMessage}
              </Text>
            </View>
          )}
        </>
      )}
    </View>
  );
};

export default React.forwardRef(Input);

interface Styles {
  rootWrapper: ViewStyle;
  labelContainer: ViewStyle;
  label: TextStyle;
  centerContainer: ViewStyle;
  startIconContainer: ViewStyle;
  textInput: TextStyle;
  loadingIndicator: TextStyle;
  endIconContainer: ViewStyle;
  endText: TextStyle;
  errorMessageContainer: ViewStyle;
  errorMessageIcon: TextStyle;
  errorMessageText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  rootWrapper: {
    alignItems: "flex-start",
  },
  labelContainer: {
    width: "100%",
    marginBottom: 8,
  },
  label: {
    ...BaseFonts.p1,
    color: BaseColors.textDark,
  },
  centerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  startIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 1,
    left: INPUT_ELEMENT_HORIZONTAL_SPACING,
  },
  textInput: {
    width: "100%",
    height: 56,
    backgroundColor: BaseColors.paper,
    borderColor: BaseColors.borderColor,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    color: BaseColors.textDark,
  },
  loadingIndicator: {
    position: "absolute",
    zIndex: 1,
    right: INPUT_ELEMENT_HORIZONTAL_SPACING,
  },
  endIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 1,
    right: INPUT_ELEMENT_HORIZONTAL_SPACING,
  },
  endText: {
    position: "absolute",
    zIndex: 1,
    right: INPUT_ELEMENT_HORIZONTAL_SPACING,
    flex: 1,
    ...BaseFonts.h4,
    color: BaseColors.textLight,
  },
  errorMessageContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 6,
  },
  errorMessageIcon: {
    marginHorizontal: 6,
  },
  errorMessageText: {
    ...BaseFonts.p1,
    textAlign: "left",
    color: BaseColors.textRed,
  },
});

// @see @types/react/index.d.ts/ForwardRefRenderFunction line 574
/**
 * propTypes are not supported on render functions
 */
/*
Input.propTypes = {
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]),
  isPassword: PropTypes.bool,
  wrapperStyle: StylePropType,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  errorMessageIconProps: PropTypes.object,
  startIconProps: PropTypes.object,
  renderStartElement: PropTypes.func,
  endIconProps: PropTypes.object,
  renderEndElement: PropTypes.object,
  endText: PropTypes.string,
  loading: PropTypes.bool,
  loadingProps: PropTypes.object,
  renderLoading: PropTypes.func,
  renderPasswordIcon: PropTypes.func,
  disabled: PropTypes.bool,
  hideDefaultEndIcons: PropTypes.bool,
  height: PropTypes.number,
  borderRadius: PropTypes.number,
  labelStyle: StylePropType,
  borderColor: PropTypes.string,
  errorColor: PropTypes.string,
  renderErrorSection: PropTypes.func,
};

*/

import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import THEMES from './THEMES';

const CustomTheme = definePreset(Aura, {
  primitive: {
    // Custom border radius values
    borderRadius: {
      none: '0',
      xs: '2px',
      sm: '4px',
      md: '8px',
      lg: '12px',
      xl: '16px',
    },

    // Custom shadow
    shadow: {
      focus: '0 0 0 0.2rem {primary.color}20',
      panel: '0 4px 8px rgba(0,0,0,0.06)',
    },
    // Custom font weight
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
    },
    color: {
      white: '#FFFFFF',
      black: '#000000',
      blue: {
        50: '#EFF6FF',
        100: '#DBEAFE',
        200: '#BFDBFE',
        300: '#93C5FD',
        400: '#60A5FA',
        500: '#3B82F6',
        600: '#2563EB',
        700: '#1D4ED8',
        800: '#1E40AF',
        900: '#1E3A8A',
        950: '#172554',
      },
      green: {
        50: '#e8f5f2',
        100: '#d1ebe5',
        200: '#a3d7cb',
        300: '#75c3b1',
        400: '#4aa998',
        500: '#2a8f7f',
        600: '#1b7667',
        700: '#0f5a43',
        800: '#0b4332',
        900: '#072c21',
        950: '#031611',
      },
      red: {
        50: '#FEF2F2',
        100: '#FEE2E2',
        200: '#FECACA',
        300: '#FCA5A5',
        400: '#F87171',
        500: '#EF4444',
        600: '#DC2626',
        700: '#B91C1C',
        800: '#991B1B',
        900: '#7F1D1D',
        950: '#450A0A',
      },
      gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
        950: '#030712',
        inputBorder: '#C6C7C4', // custom
        inputText: '#909090', // custom
      },
    },
  },
  semantic: {
    primary: {
      50: '{green.50}',
      100: '{green.100}',
      200: '{green.200}',
      300: '{green.300}',
      400: '{green.400}',
      500: '{green.500}',
      600: '{green.600}',
      700: '{green.700}',
      800: '{green.800}',
      900: '{green.900}',
      950: '{green.950}',
    },
    spacing: {
      '0': '0rem',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1.25rem',
      '2.5': '0.625rem',
      '6': '2rem',
    },
    // Custom transition duration
    transitionDuration: '0.2s',
    // Custom form field defaults
    formField: {
      paddingX: '{spacing.3}',
      paddingY: '{spacing.2}',
      borderRadius: '{border.radius.md}',
      focusRing: {
        width: '0px',
      },
      transitionDuration: '0.2s',
    },
  },
  components: {
    button: {
      root: {
        borderRadius: '{border.radius.full}',
        paddingX: '{spacing.4}',
        paddingY: '{spacing.2}',
        focusRing: {
          width: '2px',
          style: 'solid',
          offset: '2px',
        },
        label: {
          fontWeight: '{font.weight.semibold}',
        },
        roundedBorderRadius: '{border.radius.full}',
        // Sizes
        sm: {
          fontSize: '{text.sm}',
          paddingX: '{spacing.3}',
          paddingY: '{spacing.2}',
          iconOnlyWidth: '2rem',
        },
        lg: {
          fontSize: '{text.lg}',
          paddingX: '{spacing.6}',
          paddingY: '{spacing.3}',
          iconOnlyWidth: '3rem',
        },
        // Primary button variant
        primary: {
          // use green primary for action/search button to match design
          background:
            'linear-gradient(135deg, {green.600} 0%, {green.700} 100%)',
          hoverBackground:
            'linear-gradient(135deg, {green.700} 0%, {green.800} 100%)',
          activeBackground: '{green.800}',
          color: '{green.contrast.color}',
          hoverColor: '{green.contrast.color}',
          activeColor: '{green.contrast.color}',
          borderColor: '{green.600}',
          hoverBorderColor: '{green.700}',
          activeBorderColor: '{green.800}',
        },
        // Secondary button variant
        secondary: {
          background: '{surface.100}',
          hoverBackground: '{surface.200}',
          activeBackground: '{surface.300}',
          color: '{surface.900}',
          hoverColor: '{surface.900}',
          activeColor: '{surface.900}',
          borderColor: '{surface.300}',
          hoverBorderColor: '{surface.400}',
          activeBorderColor: '{surface.500}',
        },
        // Success button variant
        success: {
          background:
            'linear-gradient(135deg, {green.500} 0%, {green.600} 100%)',
          hoverBackground:
            'linear-gradient(135deg, {green.600} 0%, {green.700} 100%)',
          activeBackground: '{green.700}',
          color: '{green.contrast.color}',
          hoverColor: '{green.contrast.color}',
          activeColor: '{green.contrast.color}',
          borderColor: '{green.500}',
          hoverBorderColor: '{green.600}',
          activeBorderColor: '{green.700}',
        },
        // Info button variant
        info: {
          background: 'linear-gradient(135deg, {cyan.500} 0%, {cyan.600} 100%)',
          hoverBackground:
            'linear-gradient(135deg, {cyan.600} 0%, {cyan.700} 100%)',
          activeBackground: '{cyan.700}',
          color: '{cyan.contrast.color}',
          hoverColor: '{cyan.contrast.color}',
          activeColor: '{cyan.contrast.color}',
          borderColor: '{cyan.500}',
          hoverBorderColor: '{cyan.600}',
          activeBorderColor: '{cyan.700}',
        },
        // Warning button variant
        warn: {
          background:
            'linear-gradient(135deg, {orange.500} 0%, {orange.600} 100%)',
          hoverBackground:
            'linear-gradient(135deg, {orange.600} 0%, {orange.700} 100%)',
          activeBackground: '{orange.700}',
          color: '{orange.contrast.color}',
          hoverColor: '{orange.contrast.color}',
          activeColor: '{orange.contrast.color}',
          borderColor: '{orange.500}',
          hoverBorderColor: '{orange.600}',
          activeBorderColor: '{orange.700}',
        },
        // Danger button variant
        danger: {
          background: 'linear-gradient(135deg, {red.500} 0%, {red.600} 100%)',
          hoverBackground:
            'linear-gradient(135deg, {red.600} 0%, {red.700} 100%)',
          activeBackground: '{red.700}',
          color: '{red.contrast.color}',
          hoverColor: '{red.contrast.color}',
          activeColor: '{red.contrast.color}',
          borderColor: '{red.500}',
          hoverBorderColor: '{red.600}',
          activeBorderColor: '{red.700}',
        },
      },
      // Outlined button variants
      outlined: {
        primary: {
          hoverBackground: '{green.50}',
          activeBackground: '{green.100}',
          color: '{green.color}',
          borderColor: '{green.color}',
        },
        secondary: {
          hoverBackground: '{surface.100}',
          activeBackground: '{surface.200}',
          color: '{surface.900}',
          borderColor: '{surface.300}',
        },
      },
    },
    // Input component styling
    inputtext: {
      root: {
        background: '{color.white}',
        borderColor: '{color.gray.inputBorder}', // giữ lại 1 borderColor duy nhất
        borderRadius: '{border.radius.lg}',
        paddingX: '{spacing.2}',
        paddingY: '{spacing.2}',
        disabledBackground: '{surface.100}',
        filledBackground: '{surface.50}',
        filledHoverBackground: '{surface.100}',
        filledFocusBackground: '{surface.0}',
        hoverBorderColor: '{color.gray.inputBorder}',
        invalidBorderColor: '{red.color}',
        color: '{color.gray.inputText}',
        disabledColor: '{text.muted.color}',
        placeholderColor: '{text.muted.color}',
        invalidPlaceholderColor: '{red.color}',
        shadow: '{shadow.focus}',
        transitionDuration: '{transition.fast}',
        focusBorderColor: '{color.gray.inputBorder}',
      },
    },
    // InputNumber component styling
    inputnumber: {
      root: {
        transitionDuration: '0.2s',
      },
      button: {
        width: '2.5rem',
        borderRadius: '{border.radius.md}',
        verticalPadding: '0.5rem',
        background: '{surface.100}',
        hoverBackground: '{surface.200}',
        activeBackground: '{surface.300}',
        borderColor: '{surface.300}',
        hoverBorderColor: '{primary.color}',
        activeBorderColor: '{primary.color}',
        color: '{text.color}',
        hoverColor: '{primary.color}',
        activeColor: '{primary.color}',
      },
    },
    // Select/Dropdown component styling
    select: {
      root: {
        background: '{surface.0}',
        borderColor: '{color.gray.inputBorder}',
        borderRadius: '{border.radius.lg}',
        paddingX: '{spacing.4}',
        paddingY: '{spacing.3}',
        disabledBackground: '{surface.100}',
        filledBackground: '{surface.50}',
        filledHoverBackground: '{surface.100}',
        filledFocusBackground: '{surface.0}',
        hoverBorderColor: '{color.gray.inputBorder}',
        focusBorderColor: '{color.gray.inputBorder}',
        invalidBorderColor: '{red.color}',
        color: '{text.color}',
        disabledColor: '{text.muted.color}',
        placeholderColor: '{text.muted.color}',
        invalidPlaceholderColor: '{red.color}',
        shadow: '{shadow.focus}',
        transitionDuration: '{transition.fast}',
      },
    },
    // MultiSelect component styling
    multiselect: {
      root: {
        background: '{surface.0}',
        disabledBackground: '{surface.100}',
        filledBackground: '{surface.50}',
        filledHoverBackground: '{surface.100}',
        filledFocusBackground: '{surface.0}',
        borderColor: '{color.gray.inputBorder}',
        hoverBorderColor: '{color.gray.inputBorder}',
        focusBorderColor: '{color.gray.inputBorder}',
        invalidBorderColor: '{red.color}',
        color: '{text.color}',
        disabledColor: '{text.muted.color}',
        placeholderColor: '{text.muted.color}',
        invalidPlaceholderColor: '{red.color}',
        shadow: '0 0 0 0.2rem {primary.color}20',
        paddingX: '{spacing.3}',
        paddingY: '{spacing.2}',
        borderRadius: '{border.radius.md}',
        transitionDuration: '0.2s',
      },
    },
    // DatePicker/Calendar component styling
    datepicker: {
      panel: {
        background: '{surface.0}',
        borderColor: '{color.gray.inputBorder}',
        color: '{text.color}',
        borderRadius: '{border.radius.lg}',
        shadow: '{shadow.panel}',
        padding: '{spacing.2}',
      },
      header: {
        background: '{surface.0}',
        borderColor: '{color.gray.inputBorder}',
        color: '{text.color}',
        padding: '{spacing.2}',
      },
      title: {
        gap: '{spacing.2}',
        fontWeight: '{font.weight.semibold}',
      },
      dropdown: {
        width: 'auto',
        borderColor: '{color.gray.inputBorder}',
        hoverBorderColor: '{color.gray.inputBorder}',
        activeBorderColor: '{primary.color}',
        color: '{text.color}',
        hoverColor: '{primary.color}',
        activeColor: '{primary.color}',
        background: '{surface.0}',
        hoverBackground: '{surface.50}',
        activeBackground: '{surface.100}',
        borderRadius: '{border.radius.md}',
      },
    },
  },
});

export default CustomTheme;

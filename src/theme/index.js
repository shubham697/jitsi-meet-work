const Theme = {};

// Fonts
// ------------------------------------------------------------
Theme.fonts = {
	extraBold: 'Yellix-ExtraBold',
	bold: 'Yellix-Bold',
	semiBold: 'Yellix-SemiBold',
	light: 'Yellix-Light',
	medium: 'Yellix-Medium',
	regular: 'Yellix-Regular',
	thin: 'Yellix-Thin',
	black: 'Yellix-Black',
	italicExtraBold: 'Yellix-ExtraBoldItalic',
	italicBold: 'Yellix-BoldItalic',
	italicLight: 'Yellix-LightItalic',
	italicMedium: 'Yellix-MediumItalic',
};

// ------------------------------------------------------------
// Sizing
// ------------------------------------------------------------
Theme.sizes = {
	xsTiny: 4,
	xTiny: 8,
	tiny: 12,
	smallTiny: 14,
	small: 16,
	normalM: 19,
	normal: 20,
	base: 24,
	large: 48,
	xLarge: 64,
};

Theme.icons = {
	tiny: 10,
	small: 20,
	headerIcon: 24,
	base: 30,
	large: 40,
	xLarge: 50,
};

Theme.colors = {
	transparent: 'transparent',
	text: '#222222',
	subText: '#AFAFAF',
	placeholder: '#595959',
	primary: '#23cbd8',
	secondary: '#32db64',
	danger: '#f53d3d',
	light: '#f4f4f4',
	dark: '#222',
	black: '#000',
	white: '#fff',
	gray1: '#454b4c',
	gray2: '#707a7c',
	gray3: '#8c9799',
	gray4: '#737373',
	gray5: '#D5D4E0',
	gray6: '#E9E9F7',
	gray7: '#AAA8BF',
	gray8: '#FAFAFC',
	gray9: '#F6F6F9',
	red: '#f00',
	red1: '#f55a00',
	blue1: '#9900FF',
	alertError: '#cc1c4e',
	alertSuccess: '#1dd890',
	alertWarning: '#f4e637',
	warning: '#f4be38',
	alertInfo: '#109df7',
}

Theme.styles = {
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	row_center: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
	col_center: { flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
	row_center_start: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' },
	col_center_start: { flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' },
	row_center_end: { flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' },
	col_center_end: { flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' },
	flex_between: { width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
	w100: { width: '100%' },
	flex_1: { flex: 1 },
	title: {
		margin: 10,
		fontFamily: Theme.fonts.bold,
		color: Theme.colors.white,
		fontSize: 18,
		textAlign: 'center',
	},
	description: {
		fontFamily: Theme.fonts.medium,
		color: Theme.colors.text,
		fontSize: 16,
	},
	button: {
		backgroundColor: Theme.colors.btnPrimary,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 12,
	},
	disabledButton: {
		opacity: 0.5,
	},
	buttonText: {
		fontFamily: Theme.fonts.semiBold,
		color: Theme.colors.white,
		fontSize: 18,
	},
	alert: {
		fontFamily: 'Yellix-Medium',
		fontSize: Theme.sizes.normal,
		lineHeight: Theme.sizes.normal,
		marginRight: Theme.sizes.small,
		color: Theme.colors.whitePrimary,
	},
};

export default Theme;

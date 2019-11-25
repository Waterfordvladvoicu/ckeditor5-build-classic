/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import List from '@ckeditor/ckeditor5-list/src/list';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import Break from './ssml-tags/break';
// import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
// import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
// import Icon1 from '@ckeditor/ckeditor5-core/theme/icons/check.svg';
// import EventEmitter from 'events';
// import ClickObserver from '@ckeditor/ckeditor5-engine/src/view/observer/clickobserver';

export default class ClassicWaterfordEditor extends ClassicEditorBase {}
// class TestPlugin extends Plugin {
// 	init() {
// 		const editor = this.editor;
// 		editor.ui.componentFactory.add( 'test', locale => {
// 			const view = new ButtonView( locale );
// 			view.set( {
// 				label: 'Test',
// 				icon: imageIcon,
// 				tooltip: true
// 			} );
// 			view.on( 'execute', () => {
// 				editor.fire( 'testEvent' );
// 			} );
// 			return view;
// 		} );
// 	}
// }

// Plugins to include in the build.
ClassicWaterfordEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	Underline,
	CKFinder,
	EasyImage,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	List,
	FontFamily,
	FontSize,
	Break
];

// Editor configuration.
ClassicWaterfordEditor.defaultConfig = {
	toolbar: {
		items: [
			'fontFamily',
			'fontSize',
			'bold',
			'italic',
			'underline',
			'|',
			'imageUpload',
			'|',
			'bulletedList',
			'numberedList',
			'|',
			'outdent',
			'indent',
			'break'
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	},
	fontSize: {
		options: [
			9,
			11,
			13,
			'default',
			17,
			19,
			21,
			23,
			25,
			27,
			29,
			31,
			33,
			35
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
// eslint-disable-next-line no-undef
ClassicWaterfordEditor.create( document.querySelector( '#editor' ) )
	.then( editor => {
		// eslint-disable-next-line no-undef
		window.editor = editor;
	} )
	.catch( err => {
		// eslint-disable-next-line no-undef
		console.error( err.stack );
	} );

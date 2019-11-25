import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import BreakCommand from './breakcommand';

export default class BreakEditing extends Plugin {
	init() {
		// eslint-disable-next-line no-undef
		console.log( 'BreakEditing init' );

		this._defineSchema();
		this._defineConverters();
		this.editor.commands.add( 'break', new BreakCommand( this.editor ) );
	}

	_defineSchema() {
		const schema = this.editor.model.schema;

		// schema.register( 'break', {
		// 	allowWhere: '$text',
		// 	isInline: true,
		// 	isObject: false
		// } );
		schema.extend( '$text', { allowAttributes: 'break' } );
		schema.setAttributeProperties( 'break', {
			isFormatting: true,
			copyOnEnter: true
		} );
	}

	_defineConverters() {
		const conversion = this.editor.conversion;

		// conversion.for( 'upcast' ).elementToElement( {
		// 	view: {
		// 		name: 'break',
		// 		classes: [ 'ssml-break' ]
		// 	},
		// 	model: ( viewElement, modelWriter ) => {
		// 		return modelWriter.createElement( 'break' );
		// 	}
		// } );
		// conversion.for( 'downcast' ).elementToElement( {
		// 	model: 'break',
		// 	view: {
		// 		name: 'break',
		// 		classes: 'ssml-break'
		// 	}
		// } );
		conversion.attributeToElement( {
			model: 'break',
			view: {
				name: 'break',
				classes: 'ssml-break'
			}
		} );
	}
}

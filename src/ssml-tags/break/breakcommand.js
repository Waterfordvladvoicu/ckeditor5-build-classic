import Command from '@ckeditor/ckeditor5-core/src/command';

export default class BreakCommand extends Command {
	refresh() {
		const model = this.editor.model;
		const doc = model.document;
		this.value = this._getValueFromFirstAllowedNode();
		this.isEnabled = model.schema.checkAttributeInSelection( doc.selection, 'break' );
	}

	execute( options = {} ) {
		const model = this.editor.model;
		const doc = model.document;
		const selection = doc.selection;
		const value = ( options.forceValue === undefined ) ? !this.value : options.forceValue;

		model.change( writer => {
			if ( selection.isCollapsed ) {
				if ( value ) {
					writer.setSelectionAttribute( 'break', true );
				} else {
					writer.removeSelectionAttribute( 'break' );
				}
			} else {
				const ranges = model.schema.getValidRanges( selection.getRanges(), 'break' );

				for ( const range of ranges ) {
					if ( value ) {
						writer.setAttribute( 'break', value, range );
					} else {
						writer.removeAttribute( 'break', range );
					}
				}
			}
		} );
	}

	_getValueFromFirstAllowedNode() {
		const model = this.editor.model;
		const schema = model.schema;
		const selection = model.document.selection;

		if ( selection.isCollapsed ) {
			return selection.hasAttribute( 'break' );
		}

		for ( const range of selection.getRanges() ) {
			for ( const item of range.getItems() ) {
				if ( schema.checkAttribute( item, 'break' ) ) {
					return item.hasAttribute( 'break' );
				}
			}
		}

		return false;
	}
}

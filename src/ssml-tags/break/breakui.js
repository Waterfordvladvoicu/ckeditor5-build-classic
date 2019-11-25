import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
// import { createDropdown } from '@ckeditor/ckeditor5-ui/src/dropdown/utils';
// import BreakFormView from './breakformview';
import breakIcon from '@ckeditor/ckeditor5-core/theme/icons/check.svg';

const BREAK = 'break';

export default class BreakUI extends Plugin {
	init() {
		const editor = this.editor;
		const t = editor.t;

		editor.ui.componentFactory.add( BREAK, locale => {
			const command = editor.commands.get( BREAK );
			const view = new ButtonView( locale );

			view.set( {
				label: t( 'Break' ),
				icon: breakIcon,
				tooltip: true,
				isToggleable: true
			} );
			view.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );
			this.listenTo( view, 'execute', () => editor.execute( BREAK ) );

			return view;
		} );
	}
}

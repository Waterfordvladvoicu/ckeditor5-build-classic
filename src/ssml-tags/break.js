import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import BreakEditing from './break/breakediting';
import BreakUI from './break/breakui';

export default class Break extends Plugin {
	static get requires() {
		return [ BreakEditing, BreakUI ];
	}

	static get pluginName() {
		return 'Break';
	}
}

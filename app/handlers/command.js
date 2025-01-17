import {
  COMMAND_BOT_ACTIVATE,
  COMMAND_SYS_COMMAND,
  COMMAND_BOT_DEACTIVATE,
  GENERAL_COMMANDS,
  INFO_COMMANDS,
} from '../commands/index.js';
import Context from '../context.js';
import { updateHistory } from '../history/index.js';

/**
 * @param {Context} context
 * @returns {boolean}
 */
const check = (context) => context.hasCommand(COMMAND_SYS_COMMAND);

/**
 * @param {Context} context
 * @returns {Context}
 */
const exec = (context) => check(context) && (
  async () => {
    updateHistory(context.id, (history) => history.erase());
    try {

      const carousel = [...INFO_COMMANDS];
      context.pushTemplate(COMMAND_SYS_COMMAND.label, carousel, GENERAL_COMMANDS);


    } catch (err) {
      context.pushError(err);
    }
    return context;
  }
)();

export default exec;

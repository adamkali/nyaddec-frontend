export default class DetailedLog {
	/**
	 *  A class for logging.
	 *
	 *  @param response : A variable that can be assigned to any datatype like bool, number[], or json.
	 *  @param success : Whether an operation was successful or not.
	 *  @param errorMessage : Store any errors that occur in the operation.
	 *  @param log : Store any logs of what happened in codeexecution.
	 */

	response: any;
	success = false;
	errorMessage = "";
	log = [{ message: "" }];

	/**
	 * @returns a json for sufficient logging.
	 */
	get() {
		return {
			response: this.response,
			success: this.success,
			error: this.errorMessage,
			log: this.log,
		};
	}

	/**
	 *   A Function for adding logs to the DetailedLog
	 *
	 *   @param message : Will add this message to the log Json
	 */
	addLog(message: string) {
		if (this.log.length > 1) this.log.push({ message: message });
		else this.log[0].message = message;
	}

	/**
	 * Just get the logs of the the DetailedLog
	 *
	 * @returns get just the log of messages
	 */
	getLog() {
		return this.log;
	}
}

class SResponse {
  constructor(result) {
    this.success = true;
    if (result) {
      this.success = false;
      this.results = [];
      this.results.push(result);
    }
  }

  /**
   * add a result
   * @param {Result} result
   */
  addResult(result) {
    if (!this.results) {
      this.results = [];
    }

    this.results.push(result);
  }
}

/**
 *
 */
class Result {
  constructor(errorMessage = "", errorCode = "", severity = Severity.Low) {
    this.errorCode = errorCode;
    this.errorMessage = errorMessage;
    this.severity = severity;
  }
}

let Severity = {
  Low: 0,
  Height: 1,
};

module.exports = SResponse;

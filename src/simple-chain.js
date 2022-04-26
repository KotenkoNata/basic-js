let chainMaker = {
    array: [],
    getLength() {
        return this.array.length;
    },
    addLink(value) {
        if (arguments.length>=1) {
            this.array.push(`( ${value} )`);
        }
        else {
            this.array.push(`( )`);
        }
        return this;
    },
    removeLink(position) {
        if (!position || typeof position !== "number" || position <= 0 || position >= this.array.length) {
            this.array=[];
            throw new Error(
                'You can\'t remove incorrect link!'
            )
        }
        this.array.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.array.reverse();
        return this;
    },
    finishChain() {
        let result = this.array.join("~~");
        this.array=[];
        return result;
    }
};

/**
 * Implement chainMaker object according to task description
 *
 */
module.exports = {
  chainMaker
};

class Util {
    static sleep(ms) {
        return new Promise(t => setTimeout(r, ms));
    }
}
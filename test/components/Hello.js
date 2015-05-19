import assert from 'power-assert';
import Hello from '../../src/js/components/Hello';

describe('test Hello', () => {
    var hello;

    before('setup', () => {
        // create instance
        hello = new Hello('hello');
    });

    it('Hello is function', () => {
        assert(typeof Hello === 'function');
    });

    it("Hello don't has say(), because it is instance method", () => {
        assert(typeof Hello.say === 'undefined');
    });

    it("Hello don't has later(), because it is instance method", () => {
        assert(typeof Hello.later === 'undefined');
    });

    it('message is hello', () => {
        assert(hello.message === 'hello');
    });

    it('hello has say()', () => {
        assert(typeof hello.say === 'function');
    });

    it('hello has later()', () => {
        assert(typeof hello.later === 'function');
    });

    it('later(): done after 1000ms', (done) => {
        hello.later().then(() => {
            // resolve
            assert(true);
            done();
        }, () => {
            // reject
            assert(true);
            done();
        });
    });
});
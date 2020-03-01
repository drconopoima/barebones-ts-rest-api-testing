"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const supertest = require("supertest");
const app = require("../src/server");
describe("Verify Jest", () => {
    it("is working correctly", (done) => __awaiter(void 0, void 0, void 0, function* () {
        expect(1).toBe(1);
        done();
    }));
});
describe("Main app Endpoint", () => {
    it("responds to request", () => __awaiter(void 0, void 0, void 0, function* () {
        // Act
        const response = yield supertest(app).get("/");
        // Assert
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Hello world!");
    }));
});

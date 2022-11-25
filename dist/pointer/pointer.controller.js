"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointerController = void 0;
const common_1 = require("@nestjs/common");
const pointer_service_1 = require("./pointer.service");
let PointerController = class PointerController {
    constructor(pointerService) {
        this.pointerService = pointerService;
    }
    async getAll() {
        return this.pointerService.findAll();
    }
    async createpointer(pointer) {
        return this.pointerService.create(pointer);
    }
    async updatePointer(id, todo) {
        return this.pointerService.updatePointer(Number(id), todo);
    }
    async deletePointer(id) {
        this.pointerService.deletePointer(Number(id));
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PointerController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PointerController.prototype, "createpointer", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PointerController.prototype, "updatePointer", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PointerController.prototype, "deletePointer", null);
PointerController = __decorate([
    (0, common_1.Controller)('pointer'),
    __metadata("design:paramtypes", [pointer_service_1.PointerService])
], PointerController);
exports.PointerController = PointerController;
//# sourceMappingURL=pointer.controller.js.map
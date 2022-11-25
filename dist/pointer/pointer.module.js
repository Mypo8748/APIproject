"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointerModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pointer_entity_1 = require("./dto/pointer.entity");
const pointer_controller_1 = require("./pointer.controller");
const pointer_service_1 = require("./pointer.service");
let PointerModule = class PointerModule {
};
PointerModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([pointer_entity_1.PointerEntity])],
        providers: [pointer_service_1.PointerService],
        controllers: [pointer_controller_1.PointerController]
    })
], PointerModule);
exports.PointerModule = PointerModule;
//# sourceMappingURL=pointer.module.js.map
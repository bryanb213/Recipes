import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    public name: string;
    public desc: string;
    public imgPath: string;
    public ingredents: Ingredient[];

    constructor(name: string, desc: string, imgPath: string, ingredents: Ingredient[]) {
        this.name = name;
        this.desc = desc;
        this.imgPath = imgPath;
        this.ingredents = ingredents;
    }
}

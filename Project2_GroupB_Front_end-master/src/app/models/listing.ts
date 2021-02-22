import { ImageUrl } from './image-url';
import { VideoUrl } from './video-url';

export class Listing {

    public id: number = 0;
    public about: string = "";
    public age: number = 0;
    public city: string = "";
    public color: number = 0;
    public fixed: number = 0;
    public name: string = "";
    public sex: number = 0;
    public species: string = "";
    public state: string = "";
    public type: number = 0;
    public weight: number = 0;
    public zipCode: string = "";

    public imageUrls: ImageUrl[] = [];
    public videoUrls: VideoUrl[] = [];
}
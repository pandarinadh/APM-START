import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component ({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']

})



export class StarComponent implements OnChanges {
    ngOnChanges(): void {
        this.starWidth = this.rating * 200 /5;
    }
    @Input()  rating: number;
    starWidth: number;
    @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();

    onClick(): void {
        this.ratingClicked.emit("the rating " +   this.rating + " is clicked");
       // console.log("the rating " +   this.rating + " is clicked");
    }
}
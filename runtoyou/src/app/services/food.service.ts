import { Injectable } from '@angular/core';
import { Food } from '../shered/models/Food';
import { Tag } from '../shered/models/Tag';
// import { sample_foods, sample_tags } from 'src/date';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOODS_URL } from '../shered/constants/urls';
import { FOODS_BY_SEARCH_URL } from '../shered/constants/urls';
import { FOODS_TAGS_URL } from '../shered/constants/urls';
import { FOODS_BY_TAG_URL } from '../shered/constants/urls';
import { FOOD_BY_ID_URL } from '../shered/constants/urls';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Food[]>{
    return this.http.get<Food[]>(FOODS_URL);
  };

  getAllFoodBySearchTerm(searchTerm:string){
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }
  getAllTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }

  getAllFoodsByTag(tag:string):Observable<Food[]> {
    return tag === "All" ?
    this.getAll() :
    this.http.get<Food[]>(FOODS_BY_TAG_URL + tag);
  }
  getFoodById(foodId:string):Observable<Food>{
    return this.http.get<Food>(FOOD_BY_ID_URL + foodId);
  }
}

// Import para utilizar a propriedade global de cada respectivo ambiente
import { environment } from '../environments/environment'

export const MEAT_API = environment.api   // dependendo do parametro que for passado no ng build --?? o angular carregará o respectivo valor de propriedade.

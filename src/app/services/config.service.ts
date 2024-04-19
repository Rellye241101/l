import { Injectable } from "@angular/core";
import { ConfigItem } from "./config-item";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configuration: ConfigItem[] = [
    {
      id: 1,
      name: "testimonials",
      data: {
        description: '¿Qué dicen nuestros clientes?',
        detail: '',
        feedbacks: [
          { name: 'Ignacio Perez Perez', userimage: '../assets/images/user-images/user-1.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
          { name: 'Lorena Perez Hernandez', userimage: 'assets/images/user-images/user-2.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab' },
          { name: 'Roberto Lopez Mendez', userimage: 'assets/images/user-images/user-3.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing' }
        ]
      }
    }
  ];

  constructor() {
    
  }

  getAllPages(): ConfigItem[] {
    return this.configuration;
  }
  
  getPageByName(pageName: string): ConfigItem | undefined {
    return this.configuration.find((configItem) => configItem.name === pageName);
  }
}

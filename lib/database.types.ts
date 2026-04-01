/* Auto-generated types for Supabase — update after schema changes */

export interface Database {
  public: {
    Tables: {
      hero_slides: {
        Row: {
          id: string;
          image_url: string;
          sort_order: number;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['hero_slides']['Row'], 'id' | 'created_at'> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['hero_slides']['Insert']>;
      };
      site_settings: {
        Row: {
          id: string;
          key: string;
          value: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['site_settings']['Row'], 'id' | 'updated_at'> & {
          id?: string;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['site_settings']['Insert']>;
      };
      services: {
        Row: {
          id: string;
          slug: string;
          name: string;
          duration: string;
          price: string | null;
          location: string;
          subtitle: string;
          description: string;
          image_url: string;
          contact_email: string;
          contact_phone: string;
          contact_address: string;
          sort_order: number;
          show_on_homepage: boolean;
          homepage_description: string | null;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['services']['Row'], 'id' | 'created_at'> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['services']['Insert']>;
      };
      portfolio_images: {
        Row: {
          id: string;
          image_url: string;
          alt: string;
          aspect: string;
          sort_order: number;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['portfolio_images']['Row'], 'id' | 'created_at'> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['portfolio_images']['Insert']>;
      };
      albums: {
        Row: {
          id: string;
          title: string;
          date: string;
          cover_image_url: string;
          images: string[];
          sort_order: number;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['albums']['Row'], 'id' | 'created_at'> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['albums']['Insert']>;
      };
      testimonials: {
        Row: {
          id: string;
          quote: string;
          name: string;
          event: string;
          sort_order: number;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['testimonials']['Row'], 'id' | 'created_at'> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['testimonials']['Insert']>;
      };
      contact_submissions: {
        Row: {
          id: string;
          first_name: string;
          last_name: string | null;
          email: string;
          message: string | null;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['contact_submissions']['Row'], 'id' | 'created_at'> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['contact_submissions']['Insert']>;
      };
    };
  };
}

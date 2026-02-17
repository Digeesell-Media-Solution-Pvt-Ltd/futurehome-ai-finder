export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      areas: {
        Row: {
          city: string
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          name: string
          slug: string
          updated_at: string
        }
        Insert: {
          city?: string
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name: string
          slug: string
          updated_at?: string
        }
        Update: {
          city?: string
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      developers: {
        Row: {
          created_at: string
          description: string | null
          featured: boolean
          id: string
          logo_url: string | null
          name: string
          name_ar: string | null
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          featured?: boolean
          id?: string
          logo_url?: string | null
          name: string
          name_ar?: string | null
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          featured?: boolean
          id?: string
          logo_url?: string | null
          name?: string
          name_ar?: string | null
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      leads: {
        Row: {
          created_at: string
          cta_type: string
          download_url: string | null
          email: string
          full_name: string
          id: string
          phone_country_code: string
          phone_number: string
          project_name: string | null
          requirement: string | null
        }
        Insert: {
          created_at?: string
          cta_type?: string
          download_url?: string | null
          email: string
          full_name: string
          id?: string
          phone_country_code?: string
          phone_number: string
          project_name?: string | null
          requirement?: string | null
        }
        Update: {
          created_at?: string
          cta_type?: string
          download_url?: string | null
          email?: string
          full_name?: string
          id?: string
          phone_country_code?: string
          phone_number?: string
          project_name?: string | null
          requirement?: string | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          amenities: Database["public"]["Enums"]["amenity_type"][]
          area_id: string | null
          bedroom_types: Database["public"]["Enums"]["bedroom_type"][]
          brochure_url: string | null
          city: string
          created_at: string
          currency: string
          developer_id: string
          floorplan_url: string | null
          full_description: string | null
          gallery_images: string[]
          handover_quarter:
            | Database["public"]["Enums"]["handover_quarter"]
            | null
          handover_year: number | null
          hero_image: string | null
          id: string
          investment_score: number | null
          investment_tags: Database["public"]["Enums"]["investment_tag"][]
          launch_status: Database["public"]["Enums"]["launch_status"]
          lifestyle_score: number | null
          lifestyle_tags: Database["public"]["Enums"]["lifestyle_tag"][]
          max_price: number | null
          project_name: string
          project_status: Database["public"]["Enums"]["project_status"]
          property_types: Database["public"]["Enums"]["property_type"][]
          short_description: string | null
          slug: string
          starting_price: number | null
          updated_at: string
        }
        Insert: {
          amenities?: Database["public"]["Enums"]["amenity_type"][]
          area_id?: string | null
          bedroom_types?: Database["public"]["Enums"]["bedroom_type"][]
          brochure_url?: string | null
          city?: string
          created_at?: string
          currency?: string
          developer_id: string
          floorplan_url?: string | null
          full_description?: string | null
          gallery_images?: string[]
          handover_quarter?:
            | Database["public"]["Enums"]["handover_quarter"]
            | null
          handover_year?: number | null
          hero_image?: string | null
          id?: string
          investment_score?: number | null
          investment_tags?: Database["public"]["Enums"]["investment_tag"][]
          launch_status?: Database["public"]["Enums"]["launch_status"]
          lifestyle_score?: number | null
          lifestyle_tags?: Database["public"]["Enums"]["lifestyle_tag"][]
          max_price?: number | null
          project_name: string
          project_status?: Database["public"]["Enums"]["project_status"]
          property_types?: Database["public"]["Enums"]["property_type"][]
          short_description?: string | null
          slug: string
          starting_price?: number | null
          updated_at?: string
        }
        Update: {
          amenities?: Database["public"]["Enums"]["amenity_type"][]
          area_id?: string | null
          bedroom_types?: Database["public"]["Enums"]["bedroom_type"][]
          brochure_url?: string | null
          city?: string
          created_at?: string
          currency?: string
          developer_id?: string
          floorplan_url?: string | null
          full_description?: string | null
          gallery_images?: string[]
          handover_quarter?:
            | Database["public"]["Enums"]["handover_quarter"]
            | null
          handover_year?: number | null
          hero_image?: string | null
          id?: string
          investment_score?: number | null
          investment_tags?: Database["public"]["Enums"]["investment_tag"][]
          launch_status?: Database["public"]["Enums"]["launch_status"]
          lifestyle_score?: number | null
          lifestyle_tags?: Database["public"]["Enums"]["lifestyle_tag"][]
          max_price?: number | null
          project_name?: string
          project_status?: Database["public"]["Enums"]["project_status"]
          property_types?: Database["public"]["Enums"]["property_type"][]
          short_description?: string | null
          slug?: string
          starting_price?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "projects_area_id_fkey"
            columns: ["area_id"]
            isOneToOne: false
            referencedRelation: "areas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_developer_id_fkey"
            columns: ["developer_id"]
            isOneToOne: false
            referencedRelation: "developers"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      amenity_type:
        | "Swimming Pool"
        | "Infinity Pool"
        | "Gym"
        | "Kids Play Area"
        | "BBQ Area"
        | "Landscaped Gardens"
        | "Beach Access"
        | "Clubhouse"
        | "Co-working Space"
        | "Retail Outlets"
        | "Smart Home System"
        | "Concierge"
        | "24/7 Security"
        | "Parking"
        | "Jogging Track"
        | "Spa"
        | "Yoga Deck"
      bedroom_type: "Studio" | "1BR" | "2BR" | "3BR" | "4BR" | "5BR+"
      handover_quarter: "Q1" | "Q2" | "Q3" | "Q4"
      investment_tag:
        | "High ROI"
        | "High Capital Appreciation"
        | "Rental Income Focused"
        | "Affordable Entry"
        | "Luxury Segment"
        | "Branded Residences"
        | "Limited Units"
        | "Investor Hotspot"
      launch_status:
        | "Pre-Launch"
        | "Newly Launched"
        | "Under Construction"
        | "Ready to Move"
        | "Handover Complete"
      lifestyle_tag:
        | "Waterfront"
        | "Beachfront"
        | "Golf Community"
        | "Family Friendly"
        | "Gated Community"
        | "Popular Location"
        | "Metro Access"
        | "Good Connectivity"
        | "Smart Home"
        | "Wellness Living"
        | "Resort Style"
        | "Island Living"
        | "City View"
        | "Skyline View"
      project_status:
        | "Active"
        | "Sold Out"
        | "Upcoming"
        | "On Hold"
        | "Completed"
      property_type:
        | "Apartment"
        | "Villa"
        | "Townhouse"
        | "Penthouse"
        | "Duplex"
        | "Office"
        | "Retail"
        | "Land"
        | "Mansion"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      amenity_type: [
        "Swimming Pool",
        "Infinity Pool",
        "Gym",
        "Kids Play Area",
        "BBQ Area",
        "Landscaped Gardens",
        "Beach Access",
        "Clubhouse",
        "Co-working Space",
        "Retail Outlets",
        "Smart Home System",
        "Concierge",
        "24/7 Security",
        "Parking",
        "Jogging Track",
        "Spa",
        "Yoga Deck",
      ],
      bedroom_type: ["Studio", "1BR", "2BR", "3BR", "4BR", "5BR+"],
      handover_quarter: ["Q1", "Q2", "Q3", "Q4"],
      investment_tag: [
        "High ROI",
        "High Capital Appreciation",
        "Rental Income Focused",
        "Affordable Entry",
        "Luxury Segment",
        "Branded Residences",
        "Limited Units",
        "Investor Hotspot",
      ],
      launch_status: [
        "Pre-Launch",
        "Newly Launched",
        "Under Construction",
        "Ready to Move",
        "Handover Complete",
      ],
      lifestyle_tag: [
        "Waterfront",
        "Beachfront",
        "Golf Community",
        "Family Friendly",
        "Gated Community",
        "Popular Location",
        "Metro Access",
        "Good Connectivity",
        "Smart Home",
        "Wellness Living",
        "Resort Style",
        "Island Living",
        "City View",
        "Skyline View",
      ],
      project_status: [
        "Active",
        "Sold Out",
        "Upcoming",
        "On Hold",
        "Completed",
      ],
      property_type: [
        "Apartment",
        "Villa",
        "Townhouse",
        "Penthouse",
        "Duplex",
        "Office",
        "Retail",
        "Land",
        "Mansion",
      ],
    },
  },
} as const

module ScheduleTimeBuyHelper
  def render_time_buy_container(schedule_parts)
    schedule_parts.each do |schedule_part|
       schedule_part_split_spaces = schedule_part.split(" ")
       schedule_part_split_spaces.each_with_index do |schedule_part_split_space, index|
         if schedule_part_split_space.include?("d")
          puts schedule_part_split_spaces[index - 1]
            return content_tag(:div, class: "container-svg-ticket") do
              content_tag(:span, "#{schedule_part_split_spaces[index - 1]}", class: "span-movie-times") +
              content_tag(:span, "Comprar", class: "span-comprar")
            end
         end 
       end
    end
    # Retornar nil se não houver nada a ser renderizado
    return nil
  end
end

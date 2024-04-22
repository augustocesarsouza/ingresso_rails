module ScheduleTimeBuyHelper
  def render_time_buy_container(schedule_parts, movie, cinema)
    puts movie.inspect
    rendered_content = ''.html_safe
    schedule_parts.each do |schedule_part|
      schedule_part_split_spaces = schedule_part.split(" ")

      schedule_part_split_spaces.each do |schedule_part_split_space|
        if schedule_part_split_space == "d"
            rendered_content += content_tag(:div, class: "container-svg-ticket", data: { route: chose_seats_and_more_index_path(id: movie.id, cinema_id: cinema.id) }) do
              content_tag(:span, "#{schedule_part_split_spaces[0]}", class: "span-movie-times") +
              content_tag(:span, "Comprar", class: "span-comprar")
            end
          end 
        end
      end

    return rendered_content.present? ? rendered_content : nil
  end

  def render_time_buy_vip_dublado_container(schedule_parts, movie, cinema)
    rendered_content = ''.html_safe
    
    schedule_parts.each do |schedule_part|
      schedule_part_split_spaces = schedule_part.split(" ")

      schedule_part_split_spaces.each do |schedule_part_split_space|
        if schedule_part_split_space == "v-d"
            rendered_content += content_tag(:div, class: "container-svg-ticket", data: { route: chose_seats_and_more_index_path(id: movie.id, cinema_id: cinema.id) }) do
              content_tag(:span, "#{schedule_part_split_spaces[0]}", class: "span-movie-times") +
              content_tag(:span, "Comprar", class: "span-comprar")
            end
          end 
        end
      end

    return rendered_content.present? ? rendered_content : nil
  end

  def render_time_buy_vip_3d_dublado_container(schedule_parts, movie, cinema)
    rendered_content = ''.html_safe
    
    schedule_parts.each do |schedule_part|
      schedule_part_split_spaces = schedule_part.split(" ")

      schedule_part_split_spaces.each do |schedule_part_split_space|
        if schedule_part_split_space == "v-3d-d"
            rendered_content += content_tag(:div, class: "container-svg-ticket", data: { route: chose_seats_and_more_index_path(id: movie.id, cinema_id: cinema.id) }) do
              content_tag(:span, "#{schedule_part_split_spaces[0]}", class: "span-movie-times") +
              content_tag(:span, "Comprar", class: "span-comprar")
            end
          end 
        end
      end

    return rendered_content.present? ? rendered_content : nil
  end

  def render_time_buy_3d_dbox_dublado_container(schedule_parts, movie, cinema)
    rendered_content = ''.html_safe
    
    schedule_parts.each do |schedule_part|
      schedule_part_split_spaces = schedule_part.split(" ")

      schedule_part_split_spaces.each do |schedule_part_split_space|
        if schedule_part_split_space == "3d-db-d"
            rendered_content += content_tag(:div, class: "container-svg-ticket", data: { route: chose_seats_and_more_index_path(id: movie.id, cinema_id: cinema.id) }) do
              content_tag(:span, "#{schedule_part_split_spaces[0]}", class: "span-movie-times") +
              content_tag(:span, "Comprar", class: "span-comprar")
            end
          end 
        end
      end
      
    return rendered_content.present? ? rendered_content : nil
  end

  def render_time_buy_telasgigantes_dublado_container(schedule_parts, movie, cinema)
    rendered_content = ''.html_safe
    
    schedule_parts.each do |schedule_part|
      schedule_part_split_spaces = schedule_part.split(" ")

      schedule_part_split_spaces.each do |schedule_part_split_space|
        if schedule_part_split_space == "tg-d"
            rendered_content += content_tag(:div, class: "container-svg-ticket", data: { route: chose_seats_and_more_index_path(id: movie.id, cinema_id: cinema.id) }) do
              content_tag(:span, "#{schedule_part_split_spaces[0]}", class: "span-movie-times") +
              content_tag(:span, "Comprar", class: "span-comprar")
            end
          end 
        end
      end
      
    return rendered_content.present? ? rendered_content : nil
  end
end
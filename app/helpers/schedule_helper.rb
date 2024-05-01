module ScheduleHelper
  def render_dublado_container(schedule_parts)
    rendered_once = false
    schedule_parts.each do |schedule_part|
      schedule_part_split_spaces1 = schedule_part.split(" ")
      if schedule_part_split_spaces1.include?("d")
        if !rendered_once
          rendered_once = true
          return content_tag(:div, class: "container-span-telasgigantesplf-dublado") do
            content_tag(:span, "DUBLADO")
          end
        end
      end
    end
    # Retornar nil se não houver nada a ser renderizado
    return nil
  end

  def render_legendado_container(schedule_parts)
    rendered_once = false
    schedule_parts.each do |schedule_part|
      schedule_part_split_spaces1 = schedule_part.split(" ")
      if schedule_part_split_spaces1.include?("l")
        if !rendered_once
          rendered_once = true
          return content_tag(:div, class: "container-span-telasgigantesplf-dublado") do
            content_tag(:span, "LEGENDADO")
          end
        end
      end
    end
    # Retornar nil se não houver nada a ser renderizado
    return nil
  end

  def render_vip_dublado_container(schedule_parts)
    rendered_once = false
    schedule_parts.each do |schedule_part|
      schedule_part_split_spaces1 = schedule_part.split(" ")
      if schedule_part_split_spaces1.include?("v-d")
        if !rendered_once
          rendered_once = true
          return content_tag(:div, class: "container-span-telasgigantesplf-dublado") do
            content_tag(:span, "VIP") +
            content_tag(:span, "DUBLADO")
          end
        end
      end
    end
    # Retornar nil se não houver nada a ser renderizado
    return nil
  end

  def render_vip_3d_dublado_container(schedule_parts)
    rendered_once = false
    schedule_parts.each do |schedule_part|
      schedule_part_split_spaces1 = schedule_part.split(" ")
      if schedule_part_split_spaces1.include?("v-3d-d")
        if !rendered_once
          rendered_once = true
          return content_tag(:div, class: "container-span-telasgigantesplf-dublado") do
            content_tag(:span, "VIP") +
            content_tag(:span, "3D") +
            content_tag(:span, "DUBLADO")
          end
        end
      end
    end
    # Retornar nil se não houver nada a ser renderizado
    return nil
  end

  def render_3d_dbox_dublado_container(schedule_parts)
    rendered_once = false
    schedule_parts.each do |schedule_part|
      schedule_part_split_spaces1 = schedule_part.split(" ")
      if schedule_part_split_spaces1.include?("3d-db-d")
        if !rendered_once
          rendered_once = true
          return content_tag(:div, class: "container-span-telasgigantesplf-dublado") do
            content_tag(:span, "3D") +
            content_tag(:span, "D-BOX") +
            content_tag(:span, "DUBLADO")
          end
        end
      end
    end
    # Retornar nil se não houver nada a ser renderizado
    return nil
  end

  def render_telasgigantes_dublado_container(schedule_parts)
    rendered_once = false
    schedule_parts.each do |schedule_part|
      schedule_part_split_spaces1 = schedule_part.split(" ")
      if schedule_part_split_spaces1.include?("tg-d")
        if !rendered_once
          rendered_once = true
          return content_tag(:div, class: "container-span-telasgigantesplf-dublado") do
            content_tag(:span, "TELAS GIGANTES/PLF") +
            content_tag(:span, "DUBLADO")
          end
        end
      end
    end
    # Retornar nil se não houver nada a ser renderizado
    return nil
  end
end
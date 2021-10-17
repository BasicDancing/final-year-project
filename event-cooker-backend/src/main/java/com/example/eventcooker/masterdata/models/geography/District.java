package com.example.eventcooker.masterdata.models.geography;

import lombok.*;
import net.minidev.json.annotate.JsonIgnore;
import java.util.List;
import javax.persistence.*;

@Entity
@AllArgsConstructor
@Getter
@Setter
@ToString
@NoArgsConstructor
@EqualsAndHashCode
@Table(name = "district")
public class District {

	@Id
	@Column(name = "id")
	private Long id;
	
	@Column(name = "name", length = 255)
	private String name;
	
	@Column(name = "geocode", length = 255)
	private String geocode;
	
	@ManyToOne(
			cascade = CascadeType.ALL,
			fetch = FetchType.LAZY
	)
    @JoinColumn(
			foreignKey = @ForeignKey(name = "divisionId"),
			name = "divisionId"
	)
	@ToString.Exclude
	private Division division;
	
	@OneToMany(
			mappedBy = "district",
			cascade = CascadeType.ALL,
			fetch = FetchType.LAZY
	)
	@JsonIgnore
	@ToString.Exclude
	private List<Upazila> upazilas;
}

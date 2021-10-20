package com.example.eventcooker.masterdata.models.geography;

import lombok.*;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@Getter
@Setter
@ToString
@NoArgsConstructor
@Table(name = "upazila")
public class Upazila {
	
	@Id
	@Column(name = "id")
	private Long id;
	
	@Column(name = "name", length = 255)
	private String name;
	
	@ManyToOne(
			cascade = CascadeType.ALL,
			fetch = FetchType.LAZY
	)
	@JoinColumn(
			foreignKey = @ForeignKey(name = "districtId"),
			name = "districtId"
	)
	@ToString.Exclude
	private District district;
}
